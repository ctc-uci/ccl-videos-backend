const express = require('express');
const router = express.Router();
const { createLesson } = require('../services/lesson.service');

router.post('/',(req, res) => {
  const lesson = req.body;
  console.log(lesson);
  createLesson(lesson);
  res.send('done');
});

module.exports = router;
