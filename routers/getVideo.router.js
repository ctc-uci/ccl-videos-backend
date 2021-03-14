const express = require('express');
const router = express.Router();
const lessonService = require('../services/lesson.service');

router.get('/:id', async (req, res) => {
    try {
        const { access_token: accessToken } = req.cookies;
        const videoId = req.params.id;
        const video = await lessonService.getVideo(accessToken, videoId);
        res.send(video);
    } catch (error) {
        console.error(`Error: ${error}`);
        res.redirect('/');
    }
  });
  
  module.exports = router;
