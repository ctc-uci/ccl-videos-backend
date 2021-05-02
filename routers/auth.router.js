const express = require('express');
const router = express.Router();
require('dotenv').config();

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === process.env.CCL_USER && password === process.env.CCL_PASSWORD) {
    req.session.loggedIn = true;
    res.status(200).send('Login Successfully');
  } else {
    res.status(400).send('Login Failed');
  }
});

router.get('/verify', (req, res) => {
  if (req.session.loggedIn) {
    res.status(200).send(true);
  } else {
    res.status(400).send(false);
  }
});

router.post('/logout', (req, res) => {
  req.session.loggedIn = false;
  res.status(200).send('Logged Out');
});

module.exports = router;
