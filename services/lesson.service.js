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

  editLesson: async (id, newTitle, newDescription, newVideoUrl ) => {
    return Lesson.updateOne({_id: id}, {$set: {title: newTitle, description: newDescription , videoUrl:newVideoUrl}} )
  },
  
};
