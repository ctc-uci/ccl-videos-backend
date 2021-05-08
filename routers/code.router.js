const express = require('express');
const router = express.Router();
const lessonService = require('../services/lesson.service');
const SendGridService = require("../services/sendGrid.service");
const { CODE_STATUSES, REDEEM_RESULTS } = require('../consts');

router.post('/:code/redeem', async (req, res) => {
  const { code } = req.params;
  try {
    const lesson = await lessonService.getLessonByCode(code);

    let foundCode = null;

    if (!lesson) {
      res.status(401).send({ error: 'Code does not exist' });
      return;
    }

    lesson.codes.forEach((codeObj) => {
      if (codeObj.code === code) {
        foundCode = codeObj;
        return false;
      }
    });

    if (foundCode.status === CODE_STATUSES.EXPIRED) {
      res.status(401).send({ error: 'Code is expired' });
    } else {
      let result = '';
      if (foundCode.status === CODE_STATUSES.INACTIVE) {
        result = REDEEM_RESULTS.NOW_ACTIVE;
        foundCode.expirationDate = new Date(new Date().getTime() + foundCode.ttl * 1000);
        lesson.save();
      } else {
        result = REDEEM_RESULTS.ALREADY_ACTIVE;
      }

      res.status(200).send({
        lesson,
        result,
        expirationDate: foundCode.expirationDate,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
});

router.post("/:code/notifyByEmail", async (req, res) => {
  const { code } = req.params;
  const { email } = req.body;
  try {
    const lesson = await lessonService.getLessonByCode(code);
    if (!lesson) {
      res.status(401).send({ error: "Code does not exist" });
      return;
    }

    const msg = SendGridService.generateEmailMsg(code);
    const header = "This is the title";
    await SendGridService.sendEmail(email, header, msg);
    res.status(200).send();
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
});

router.get('/:code', async (req, res) => {
  const { code } = req.params;
  try {
    const lesson = await lessonService.getLessonByCode(code);

    if (!lesson) {
      res.status(401).send({ error: 'Code does not exist' });
      return;
    }

    lesson.codes.forEach((codeObj) => {
      if (codeObj.code === code) {
        foundCode = codeObj;
        return false;
      }
    });

    res.status(200).send({
      code: foundCode, 
      title: lesson.title,
      predicatedExpirationDate: new Date(new Date().getTime() + foundCode.ttl * 1000)
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
