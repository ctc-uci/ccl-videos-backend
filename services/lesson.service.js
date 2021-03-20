const Lesson = require('../models/lesson.schema');
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const config = require('../config');

const getVideo = async (accessToken, videoId) => {
  const res = await axios.get(`${config.apiUrl}/video/${videoId}?fields=id,title,embed_url`, {
    headers: {
      authorization: `Bearer ${accessToken}`
    }
  });

  return res.data;
};

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

  uploadVideo: async (accessToken, pathToVideoFile) => {
    console.log('UPLOADVIDEO')
    // step2: get an upload url
    const getUploadUrl  = await axios.get(`${config.apiUrl}/file/upload`, {
      headers: {
        authorization: `Bearer ${accessToken}`
      }
    });
    const uploadUrl = getUploadUrl.data.upload_url 
    console.log('UPLOADURL:', uploadUrl);
    


    
    // step3: upload the video
    const formData = new FormData();
    formData.append('file', fs.createReadStream(pathToVideoFile));

    const uploadVideo = await axios.post(uploadUrl, fs.createReadStream(pathToVideoFile), {
      headers: formData.getHeaders()
    });

    console.log('HELLO');
    console.log(uploadVideo)

    // 3. upload the video
    // 4. create the video
    // 5. publish the video

  },  


  deleteVideo: async (accessToken, videoId) => {
    const video = await getVideo(accessToken, videoId);
    await axios.delete(`${config.apiUrl}/video/${videoId}`, {
      headers: {
        authorization: `Bearer ${accessToken}`
      }
    });

    return video;
  },
  
  getVideo: async (accessToken, videoId) => {
    return getVideo(accessToken, videoId);
  },
  
  getVideos: async (accessToken, videoId) => {
    const res = await axios.get(`${config.apiUrl}/me/videos?fields=id,title,embed_url`, {
      headers: {
        authorization: `Bearer ${accessToken}`
      }
    });
  
    return res.data;
  }
};
