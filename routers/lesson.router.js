const express = require('express');
const router = express.Router();
const lessonService = require('../services/lesson.service');
const dailymotionService = require('../services/dailymotion.service');

router.post('/', async (req, res) => {
  const loggedIn = false;
  if (!loggedIn) {
    res.redirect(`https://www.dailymotion.com/oauth/authorize
    ?response_type=code
    &client_id=${process.env.DM_API_KEY}
    &redirect_uri=http://localhost:3000`);
  }
  
  const lesson = req.body;
  try {
    const createdLesson = await lessonService.createLesson(lesson);
    res.status(200).send(createdLesson);
  } catch (err) {
    console.error(err);
    res.status(500).send(new Error('Operation failed'));
  }
});

router.get('/:id', async (req, res) => {
  // get it by lesson id
});

module.exports = router;
