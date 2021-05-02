const express = require('express');
const s3uploadService = require('../services/s3upload.service');
const router = express.Router();

// { bucket: '', contentType: '' }
router.post('/', async (req, res) => {
  try {
    const uploadUrl = await s3uploadService.getUploadUrl(req.body);
    res.send(uploadUrl);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { bucket, extension } = req.body;
    const id = req.params.id;
    const s3Response = await s3uploadService.deleteVideo(id, bucket, extension);
    console.log(s3Response);
    res.send({ message: `Deleted Lesson:${id}` });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
