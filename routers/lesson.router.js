const express = require("express");
const router = express.Router();
const lessonService = require("../services/lesson.service");
const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const multer = require("multer");
const upload = multer({ dest: "images/" });

// configure the keys for accessing AWS
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

// create S3 instance
const s3 = new AWS.S3();

// Specify for AWS
let uploadType = "image/*";

// Save file image folder, get its info, and call AWS service
async function uploadThumbnail(file, lessonID) {
  let filePath = file.path;
  var buffer = fs.readFileSync(`${filePath}`);
  var ext = file.originalname.split(".")[1];

  const params = {
    ACL: "public-read",
    Body: buffer,
    Bucket: process.env.S3_BUCKET,
    ContentType: uploadType,
    Key: `${lessonID}.${ext}`,
  };

  return s3.upload(params).promise();
}

// After saving thumbnail to image folder, deletes it
function cleanFile(path) {
  fs.unlink(path, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
}

// create lesson
router.post("/", upload.single("thumbnailFile"), async (req, res) => {
  let createdLesson = {};
  var lesson = {};
  lesson = JSON.parse(JSON.stringify(req.body));
  lesson.lessonId = uuidv4();
  try {
    if (req.file) {
      var awsResponse = await uploadThumbnail(req.file, lesson.lessonId);
      lesson.thumbnailUrl = awsResponse.Location;
      createdLesson.s3 = awsResponse;
      cleanFile(req.file.path);
    } else {
      lesson.thumbnailUrl = "";
    }
    createdLesson.mongoResponse = await lessonService.createLesson(lesson);
    res.status(200).send(createdLesson);
  } catch (err) {
    console.error(err);
    res.status(500).send(new Error("Operation failed"));
  }
  console.log("done");
});

// update lesson
router.patch("/:id", upload.single("thumbnailFile"), async (req, res) => {
  let updatedLesson = {};
  let lesson = JSON.parse(JSON.stringify(req.body));
  const id = req.params.id;
  try {
    if (req.file) {
      var awsResponse = await uploadThumbnail(req.file, lesson.lessonId);
      lesson.thumbnailUrl = awsResponse.Location;
      updatedLesson.s3 = awsResponse;
      cleanFile(req.file.path);
    } else {
      lesson.thumbnailUrl = "";
    }
    updatedLesson.mongoResponse = await lessonService.editLesson(id, lesson);
    if (result.nModified === 0) {
      res.status(400).send({ message: "Malformed input." });
    } else {
      res.status(200).send({ id: id, updatedLesson: updatedLesson });
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

module.exports = router;
