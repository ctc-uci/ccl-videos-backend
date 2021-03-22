const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  title: String,
  description: String,
  videoUrl: String,
  codes: [
    {
      code: String,
      active: Boolean,
      expirationDate: Date
    },
  ],
});

module.exports = mongoose.model('Lesson', lessonSchema);
