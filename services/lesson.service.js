const Lesson = require("../models/lesson.schema");

module.exports = {
  createLesson: async (lesson) => {
    if (!lesson.title || !lesson.description || !lesson.videoUrl) {
      throw new Error("Arguments missing in lesson");
    }
    const createdLesson = new Lesson({
      lessonId: lesson.lessonId,
      title: lesson.title,
      description: lesson.description,
      videoUrl: lesson.videoUrl,
      thumbnailUrl: lesson.thumbnailUrl,
      visible: lesson.visible,
      codes: [],
    });

    return createdLesson.save();
  },

  getAllLessons: async () => {
    return await Lesson.find({});
  },

  getLessonbyID: async (lessonId) => {
    return await Lesson.findOne({ lessonId: lessonId });
  },
  editLesson: async (lessonId, updatedLesson) => {
    return Lesson.updateOne(
      { lessonId: lessonId },
      {
        $set: updatedLesson,
      }
    );
  },
};
