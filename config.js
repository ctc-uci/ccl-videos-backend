require('dotenv').config();

module.exports = {
    port: 8000,
    homepageUrl: 'http://localhost:3000/',
    apiUrl: 'https://api.dailymotion.com',
    authScopes: process.env.OAUTH_SCOPES.split(','),
    authRedirect: process.env.OAUTH_REDIRECT_URI,
    // config for SimpleOAuth2 npm library
    authConfig: {
        client: {
            id: process.env.OAUTH_API_KEY,
            secret: process.env.OAUTH_APP_SECRET
        },
        auth: {
            tokenHost: 'https://api.dailymotion.com',
            authorizeHost: 'https://www.dailymotion.com',
            tokenPath: '/oauth/token',
            authorizePath: '/oauth/authorize',
        },
        options: {
            authorizationMethod: 'body',
        },
    }
};
