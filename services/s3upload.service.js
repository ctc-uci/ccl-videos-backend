const aws = require("aws-sdk");
const { v4: uuid } = require("uuid");

const bucketMap = {
  "ccl-videos": "video",
};

module.exports = {
  getUploadUrl: async (getSignedURLDTO) => {
    const { contentType, bucket } = getSignedURLDTO;
    const fileExtension = contentType ? contentType.split(/\//)[1] : null;

    if (!fileExtension) {
      throw new Error(`Recieved unexpected content-type: ${fileExtension}`);
    }

    if (!bucketMap[bucket]) {
      throw new Error(`Include bucket, inputed: ${bucket}, expected ${Object.keys(bucketMap).join(",")}`);
    }

    aws.config.setPromisesDependency();
    aws.config.update({
      accessKeyId: process.env.ACCESSKEYID,
      secretAccessKey: process.env.SECRETACCESSKEY,
      region: process.env.REGION,
    });

    const s3 = new aws.S3();
    const URL_EXPIRATION_SECONDS = 300;
    const fileExtention = `${bucketMap[bucket]}/${uuid()}.${fileExtension}`;

    const s3Params = {
      Bucket: process.env.S3_BUCKET,
      Key: fileExtention,
      Expires: URL_EXPIRATION_SECONDS,
      ContentType: `${contentType}`,
      ACL: "public-read",
    };

    const uploadURL = s3.getSignedUrl("putObject", s3Params);
    return { uploadURL, key: fileExtention };
  },
}