const express = require("express");
const s3uploadService = require("../services/s3upload.service");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const uploadUrl = await s3uploadService.getUploadUrl();
    res.send(uploadUrl);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;