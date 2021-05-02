const Lesson = require("../models/lesson.schema");
const { v4: uuid } = require("uuid");

function generateCode(ttl) {
  const characters = "ABCDEFGHIJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 8; i++) {
    var num = Math.floor(Math.random() * characters.length);
    code += characters.charAt(num);
  }

  return {
    code,
    ttl,
  };
}

module.exports = {
  createLesson: async (lesson) => {
    if (!lesson.title || !lesson.description || !lesson.videoUrl) {
      throw new Error("Arguments missing in lesson");
    }
    const createdLesson = new Lesson({
      lessonId: lesson.lessonId || uuid(),
      title: lesson.title,
      description: lesson.description,
      videoUrl: lesson.videoUrl,
      codes: [],
    });

    return createdLesson.save();
  },

  getAllLessons: async () => {
    return await Lesson.find({});
  },

  getLessonbyID: async (lessonId) => {
    return await Lesson.findOne({ lessonId });
  },
  editLesson: async (lessonId, updatedLesson) => {
    return Lesson.updateOne(
      { lessonId },
      {
        $set: updatedLesson,
      }
    );
  },

  deleteLesson: async (lessonId) => {
    return Lesson.remove({ lessonId });
  },

  createCodes: async (numCodes, lessonId, ttl) => {
    const codeObjects = [];

    for (let i = 0; i < numCodes; i++) {
      codeObjects.push(generateCode(ttl));
    }

    await Lesson.updateOne(
      { lessonId },
      {
        $push: {
          codes: {
            $each: codeObjects,
          },
        },
      }
    );

    return codeObjects.map((codeObj) => codeObj.code);
  },

  getLessonByCode: async (code) => {
    return Lesson.findOne({
      "codes.code": code,
    });
  },

  deleteCode: async (code) => {
    return Lesson.updateOne(
      {
        "codes.code": code,
      },
      {
        $pull: {
          codes: {
            code,
          },
        },
      }
    );
  },
};
