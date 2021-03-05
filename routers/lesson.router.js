const express = require('express');
const router = express.Router();
const lessonService = require('../services/lesson.service');

router.post('/', async (req, res) => {
  const lesson = req.body;
  try {
    const createdLesson = await lessonService.createLesson(lesson);
    res.status(500).send(createdLesson);
  } catch (err) {
    console.error(err);
    res.status(500).send(new Error('Operation failed'));
  }
});

module.exports = router;
