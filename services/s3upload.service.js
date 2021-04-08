const AWS = require("aws-sdk");
const config = require("../config");

module.exports = {
  getUploadUrl: async () => {
    AWS.config.update(config.awsConfig);
    const s3 = new AWS.S3();
    var params = {
      ACL: "public-read",
      Bucket: 'ccl-videos',
      Key: 'test3.mp4',
      ContentType: 'video/mp4'
    }
    const url = s3.getSignedUrl('putObject', params);
    return url;
  },
}