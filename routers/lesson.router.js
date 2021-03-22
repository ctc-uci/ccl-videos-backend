const express = require('express');
const router = express.Router();
const lessonService = require('../services/lesson.service');

router.post('/', async (req, res) => {
  const lesson = req.body;
  try {
    const createdLesson = await lessonService.createLesson(lesson);
    res.status(200).send(createdLesson);
  } catch (err) {
    console.error(err);
    res.status(500).send(new Error('Operation failed'));
  }
});

router.put('/edit/:id', async (req, res) => {
  const id = req.params.id;
  const {title, description, videoUrl} = req.body;
  try {
    const updatedLesson = await lessonService.editLesson(id, title, description, videoUrl);
    res.status(200).send(updatedLesson);
  } catch (err) {
    console.error(err);
    res.status(500).send(new Error('Update Failed'));
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedLesson = await lessonService.deleteLesson(
      id,
    );
    if(!deletedLesson){
      return res.status(400).json({ message: 'ID NOT FOUND' });
    }
    res.status(200).send(deletedLesson);
  } catch (err) {
    console.error("DELETE ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
