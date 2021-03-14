const simpleOauth2 = require("simple-oauth2")
const config = require('./config');

module.exports = () => {
    return new simpleOauth2.AuthorizationCode(config.authConfig);
};
 