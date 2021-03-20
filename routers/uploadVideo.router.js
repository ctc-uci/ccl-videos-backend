const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const lessonService = require('../services/lesson.service');

const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('file'), async (req, res) => {
    try {
        console.log('UPLOADVIDEO.ROUTER')
        const { access_token: accessToken } = req.cookies;
        const filePath = req.file.path;
        // const buffer = fs.readFileSync(filePath);
        const file = await lessonService.uploadVideo(
            accessToken, filePath,
        );
        res.send(file);
    } catch (error) {
        console.error(`Error: ${error}`);
        res.redirect('/');
    }
  });
  
  module.exports = router;

// const express = require('express');
// const router = express.Router();
// const lessonService = require('../services/lesson.service');

// router.get('/', async (req, res) => {
//     try {
//         console.log('UPLOADVIDEO.ROUTER')
//         const { access_token: accessToken } = req.cookies;
//         const file = await lessonService.uploadVideo(
//             accessToken,
//         );
//         res.send(file);
//     } catch (error) {
//         console.error(`Error: ${error}`);
//         res.redirect('/');
//     }
//   });
  
//   module.exports = router;

