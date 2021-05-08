const sendGridAPI = require("@sendgrid/mail");

module.exports = {
  sendEmail: async (email, subject, html) => {
    sendGridAPI.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: email, // Change to your recipient
      from: process.env.SENDGRID_EMAIL, // Change to your verified sender
      subject: subject,
      html: html,
    };
    await sendGridAPI.send(msg);
  },
  generateEmailMsg: (code) => `Hello, you have redeemed the following code: '${code}'`,
};
