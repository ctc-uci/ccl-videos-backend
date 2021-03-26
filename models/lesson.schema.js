const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  lessonId: String,
  title: String,
  description: String,
  videoUrl: String,
  thumbnailUrl: String,
  visible: Boolean,
  codes: [
    {
      code: String,
      active: Boolean,
      expirationDate: Date,
    },
  ],
});

module.exports = mongoose.model("Lesson", lessonSchema);
