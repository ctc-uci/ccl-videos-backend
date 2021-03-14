const Lesson = require('../models/lesson.schema');
const axios = require('axios');
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
