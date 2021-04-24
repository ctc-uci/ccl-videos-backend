const express = require("express");
const router = express.Router();
const sendgridService = require("../services/sendgrid.service");
const email = 'ashlel13@uci.edu'

router.put("/", async (req, res) => {
    try {
      let mongoResponse = await sendgridService.insertContact(email);
      res.status(200).send(mongoResponse);
    } catch (err) {
      console.error(err);
      res.status(500).send(new Error("Operation failed"));
    }
  });

module.exports = router;