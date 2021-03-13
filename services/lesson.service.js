const Lesson = require('../models/lesson.schema');

module.exports = {
  createLesson: async (lesson) => {
    const createdLesson = new Lesson({
      title: lesson.title,
      description: lesson.description,
      videoUrl: lesson.videoUrl,
      codes: [],
    });

    return createdLesson.save();
  },
};
