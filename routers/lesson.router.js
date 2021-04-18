const express = require("express");
const router = express.Router();
const lessonService = require("../services/lesson.service");

// create lesson
router.post("/", async (req, res) => {
  try {
    let mongoResponse = await lessonService.createLesson(req.body);
    res.status(200).send(mongoResponse);
  } catch (err) {
    console.error(err);
    res.status(500).send(new Error("Operation failed"));
  }
});

// update lesson
router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    let mongoResponse = await lessonService.editLesson(id, req.body);
    if (mongoResponse.nModified === 0) {
      res.status(400).send({ message: "Malformed input." });
    } else {
      res.status(200).send({ id: id, updatedLesson: mongoResponse });
    }
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
});

// get all lessons
router.get("/", async (req, res) => {
  try {
    const allLessons = await lessonService.getAllLessons();
    res.status(200).send(allLessons);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
});

// get one lesson
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const foundLesson = await lessonService.getLessonbyID(id);
    if (!foundLesson) {
      return res.status(400).json({ message: "ID NOT FOUND" });
    }
    res.status(200).send(foundLesson);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedLesson = await lessonService.deleteLesson(id);
    if (deletedLesson.n === 0) {
      return res.status(400).json({ message: `Lesson: ${id} not deleted ` });
    }
    res.status(200).send({ message: `Lesson: ${id} deleted ` });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
});

router.post("/:id/createCodes", async (req, res) => {
  const { id } = req.params;
  const { numCodes, ttl } = req.body;
  try {
    const generatedCodes = await lessonService.createCodes(numCodes, id, ttl);
    res.status(200).send({ generatedCodes });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
