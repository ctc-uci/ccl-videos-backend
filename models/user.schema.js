const mongoose = require('mongoose');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
  username: String,
  hash: String,
  salt: String,
});

// Method to set salt and hash the password for a user
userSchema.methods.setPassword = function (password) {
  // Creating a unique salt for a particular user
  this.salt = crypto.randomBytes(16).toString('hex');

  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 1213, 64, `sha512`)
    .toString(`hex`);
};

// Method to check the entered password is correct or not
userSchema.methods.validPassword = function (password) {
  var hash = crypto
    .pbkdf2Sync(password, this.salt, 1213, 64, `sha512`)
    .toString(`hex`);
  return this.hash === hash;
};

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;