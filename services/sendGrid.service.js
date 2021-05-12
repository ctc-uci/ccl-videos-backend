const sendGridAPI = require("@sendgrid/mail");

module.exports = {
  sendEmail: async (email, subject, html) => {
    sendGridAPI.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: email,
      from: process.env.SENDGRID_EMAIL,
      subject: subject,
      html: html,
    };
    await sendGridAPI.send(msg);
  },
  generateEmailMsg: (code, lesson) => `Hello, you have successfully redeemed code ${code.code} for the lesson '${lesson.title}'. It will expire on ${code.expirationDate}.`,
};
