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

const changeCredentials = async (oldUsername, newUsername, oldPassword, newPassword) => {
  if (!oldPassword || !newPassword || !newUsername || !oldUsername) {
      throw new Error(`Missing parameters: old password or new password or name`);
  }
  console.log([oldUsername, oldPassword, newUsername, newPassword]);
  const retrievedUser = await UserModel.findOne({ username: oldUsername });
  console.log(retrievedUser);
  if (retrievedUser === null) {
    throw new Error('Username not found');
  }

  if (!retrievedUser.validPassword(oldPassword)) {
    throw new Error('Wrong Password');
  }

  const newUserInstance = new UserModel({
    newUsername,
  });

  newUserInstance.setPassword(newPassword);
  
  const updatedUser = await UserModel.findOneAndUpdate(
    { username: oldUsername }, 
    { hash: newUserInstance.hash, salt: newUserInstance.salt, username: newUsername }
  );
  console.log(updatedUser);
  return updatedUser;
};

module.exports = {
  createUser,
  retrieveUser,
  changeCredentials
};