const aws = require("aws-sdk");
const { v4: uuid } = require("uuid");

const bucketMap = {
  "ccl-videos": "video",
};

aws.config.setPromisesDependency();
aws.config.update({
  accessKeyId: process.env.ACCESSKEYID,
  secretAccessKey: process.env.SECRETACCESSKEY,
  region: process.env.REGION,
});
const s3 = new aws.S3();

module.exports = {
  getUploadUrl: async (getSignedURLDTO) => {
    const { ID, contentType, bucket } = getSignedURLDTO;
    const fileExtension = contentType ? contentType.split(/\//)[1] : null;

    if (!fileExtension) {
      throw new Error(`Recieved unexpected content-type: ${fileExtension}`);
    }

    if (!bucketMap[bucket]) {
      throw new Error(
        `Include bucket, inputed: ${bucket}, expected ${Object.keys(
          bucketMap
        ).join(",")}`
      );
    }

    const URL_EXPIRATION_SECONDS = 300;
    let fileName;

    if (ID) {
      fileName = `${bucketMap[bucket]}/${ID}.${fileExtension}`;
    } else {
      fileName = `${bucketMap[bucket]}/${uuid()}.${fileExtension}`;
    }

    const s3Params = {
      Bucket: process.env.S3_BUCKET,
      Key: fileName,
      Expires: URL_EXPIRATION_SECONDS,
      ContentType: `${contentType}`,
      ACL: "public-read",
    };

    const uploadURL = s3.getSignedUrl("putObject", s3Params);
    return { uploadURL, key: fileExtension };
  },

  deleteVideo: async (id, bucket, extension) => {
    var params = {
      Bucket: process.env.S3_BUCKET,
      Key: `${bucketMap[bucket]}/${id}.${extension}`,
    };
    return s3.deleteObject(params).promise();
  },
};
