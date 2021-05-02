const express = require('express');
const router = express.Router();
const UserService = require("../services/user.service");

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        await UserService.retrieveUser(username, password);
        res.status(200).send('Login Successfully');
    }
    catch(err) {
        console.log(err.message)
        res.status(400).send(err.message)
    }
})

router.post("/create", async (req, res) => {
    const { username, password } = req.body;
    try {
        await UserService.createUser(username, password);
        res.status(200).send('Register Successfully');
    }
    catch(err) {
        console.log(err.message)
        res.status(400).send(err.message)
    }
})

router.post("/changePassword", async (req, res) => {
    const { username, oldPassword, newPassword } = req.body;
    try {
        await UserService.changePassword(username, oldPassword, newPassword);
        res.status(200).send('Updated Password Successfully');
    }
    catch(err) {
        console.log(err.message)
        res.status(400).send(err.message)
    }
})

module.exports = router;
