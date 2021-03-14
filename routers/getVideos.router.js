const express = require('express');
const router = express.Router();
const lessonService = require('../services/lesson.service');

router.get('/', async (req, res) => {
    try {
        const { access_token: accessToken } = req.cookies;
        const video = await lessonService.getVideos(accessToken);
        res.send(video);
    } catch (error) {
        console.error(`Error: ${error}`);
        res.redirect('/');
    }
  });
  
  module.exports = router;
