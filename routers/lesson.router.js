const express = require("express");
const router = express.Router();
const lessonService = require("../services/lesson.service");

// create lesson
router.post("/", async (req, res) => {
  const lesson = req.body;
  try {
    const createdLesson = await lessonService.createLesson(lesson);
    res.status(200).send(createdLesson);
  } catch (err) {
    console.error(err);
    res.status(500).send(new Error("Operation failed"));
  }
});

// update lesson
router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await lessonService.editLesson(id, req.body);
    if (result.nModified === 0) {
      res.status(400).send({ message: "Malformed input." });
    } else {
      res.status(200).send({ id: id, updatedLesson: req.body });
    }
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
});

// get all lessons
router.get('/', async (req, res) => {
  try {
    const allLessons = await lessonService.getAllLessons();
    res.status(200).send(allLessons);
  } catch (err) {
    console.error(err);
    res.status(400).json({message: err.message});
  }
});

// get one lesson
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const foundLesson = await lessonService.getLessonbyID(id);
    if (!foundLesson) {
      return res.status(400).json({message: 'ID NOT FOUND'});
    } 
    res.status(200).send(foundLesson);
  } catch (err) {
    console.error(err);
    res.status(400).json({message: err.message});
  }
});

router.post('/:id/createCodes', async (req, res) => {
  const { id } = req.params;
  const { numCodes, ttl } = req.body;
  try {
    const generatedCodes = await lessonService.createCodes(numCodes, id, ttl);
    res.status(200).send({ generatedCodes });
  } catch (err) {
    console.error(err);
    res.status(400).json({message: err.message});
  }
});

module.exports = router;
