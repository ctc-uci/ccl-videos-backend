const mongoose = require('mongoose');
const { CODE_STATUSES } = require('./../consts');

const lessonSchema = new mongoose.Schema({
  lessonId: String,
  title: String,
  description: String,
  videoUrl: String,
  codes: [
    {
      code: String,
      ttl: Number,
      expirationDate: Date
    },
  ],
});

lessonSchema.path('codes').schema.virtual('status').get(function() {
  if (!this.expirationDate) {
    return CODE_STATUSES.INACTIVE;
  }
  if (new Date() > this.expirationDate) {
    return CODE_STATUSES.EXPIRED;
  }
  return CODE_STATUSES.ACTIVE;
});

lessonSchema.path('codes').schema.options.toJSON = { virtuals: true };

module.exports = mongoose.model('Lesson', lessonSchema);
