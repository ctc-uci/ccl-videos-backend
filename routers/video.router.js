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

router.delete('/:id', async (req, res) => {
    try {
        const { access_token: accessToken } = req.cookies;
        const videoId = req.params.id;
        const file = await lessonService.deleteVideo(accessToken, videoId);
        res.send(file);
    } catch (error) {
        console.error(`Error: ${error}`);
        res.redirect('/');
    }
});

module.exports = router;