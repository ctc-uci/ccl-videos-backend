const express = require('express');
const router = express.Router();
const config = require('../config');

router.get('/signin',
  async (req, res) => {
    const urlParameters = {
      scopes: config.authScopes,
      redirect_uri: config.authRedirect,
    };

    try {
      const authUrl = await req.app.locals
        .client.authorizeURL(urlParameters);
      console.log(authUrl);
      res.redirect(authUrl);
    } catch (error) {
      console.error(`Error: ${error}`);
      res.redirect('/');
    }
  });
      
router.get('/callback',
  async (req, res) => {
      
    const tokenRequest = {
      code: req.query.code,
      redirect_uri: config.authRedirect,
      scope: config.authScopes,
    };

    try {
        const accessToken = await req.app.locals.client.getToken(tokenRequest);
        console.log('The resulting token: ', accessToken.token)
        res.cookie('access_token', accessToken.token.access_token);
        res.redirect(config.homepageUrl);
    } catch (error) {
        console.log('Access Token Error', error)
    } 

  });

  module.exports = router;