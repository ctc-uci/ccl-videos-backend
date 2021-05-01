const UserModel = require('../models/user.schema');

const createUser = async (username, password) => {
  if (!username || !password) {
    throw new Error(`Missing parameters: username or password`);
  }

  const checkDup = await UserModel.findOne({ username: username });
  if (checkDup) {
    throw new Error('Username already exists');
  }

  const userInstance = new UserModel({
    username,
  });

  userInstance.setPassword(password);

  const confirmedUser = await userInstance.save();
  return confirmedUser;
};

const retrieveUser = async (username, password) => {
  if (!username || !password) {
    throw new Error(`Missing parameters: username or password`);
  }

  const retrievedUser = await UserModel.findOne({ username: username });

  if (retrievedUser === null) {
    throw new Error('Username not found');
  }

  if (!retrievedUser.validPassword(password)) {
    throw new Error('Wrong Password');
  }

  return retrievedUser;
};

const changePassword = async (username, oldPassword, newPassword) => {
  if (!oldPassword || !newPassword || !username) {
      throw new Error(`Missing parameters: old password or new password or name`);
  }

  const retrievedUser = await UserModel.findOne({ username: username });

  if (retrievedUser === null) {
    throw new Error('Username not found');
  }

  if (!retrievedUser.validPassword(oldPassword)) {
    throw new Error('Wrong Password');
  }

  const newUserInstance = new UserModel({
    username,
  });

  newUserInstance.setPassword(newPassword);
  
  const updatedUser = await UserModel.findOneAndUpdate(
    { username: username }, 
    { hash: newUserInstance.hash, salt: newUserInstance.salt}
  );
  return updatedUser;
};

module.exports = {
  createUser,
  retrieveUser,
  changePassword
};