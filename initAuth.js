const simpleOauth2 = require("simple-oauth2")
const config = require('./config');

module.exports = () => {
    const client = new simpleOauth2.AuthorizationCode(config.authConfig)
    return client;
};
 