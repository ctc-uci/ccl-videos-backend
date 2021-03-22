const Lesson = require('../models/lesson.schema');

module.exports = {
  createLesson: async (lesson) => {
    if (!lesson.title || !lesson.description || !lesson.videoUrl) {
      throw new Error('Arguments missing in lesson');
    }
    const createdLesson = new Lesson({
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

  getLessonbyID: async (id) => {
    return await Lesson.findById(id);
  },
  editLesson: async (id, updatedLesson) => {
    return Lesson.updateOne(
      { _id: id },
      {
        $set: updatedLesson,
      }
    );
  },
};
