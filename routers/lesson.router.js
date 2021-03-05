const express = require('express');
const router = express.Router();
const { createLesson } = require('../services/lesson.service');

router.post('/',(req, res) => {
  const lesson = req.body;
  const createdLesson = createLesson(lesson);
  res.send(createdLesson);
});

module.exports = router;
