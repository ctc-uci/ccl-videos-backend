const axios = require('axios');
const sendgridURL = "https://api.sendgrid.com/v3/marketing/contacts"

module.exports = {
    insertContact: async (email) => {
      const createdContact = {
        "contacts": [
          {
            "email": email
          }
        ]
      };
      
      const res = await axios.put(`${sendgridURL}`, createdContact, {
        headers: {
        authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
        'content-type': 'application/json'
        }
        });
      console.log(res);
      return res.data;
    },
}  