const Lesson = require('../models/lesson.schema')

const createLesson = (lesson) => {
 const createdLesson = new Lesson(
   {
    title: lesson.title,
    description: lesson.description,
    videoUrl: lesson.videoUrl,
    codes: []
   }
 )

 createdLesson.save((err, lesson) => {
   if (err) {
     console.log('Error when creating lesson')
   }
   console.log(lesson);
   console.log('lesson saved');
 })
}

module.exports = { createLesson };