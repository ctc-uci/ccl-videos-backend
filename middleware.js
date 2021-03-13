const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');

module.exports = {
  cookie: cookieParser(),
  // FIXME: in production, the origin should be limited to the frontend's host
  cors: cors({ origin: true, credentials: true }),
  session: session({
    secret: 'your_secret_value_here',
    resave: false,
    saveUninitialized: false,
    unset: 'destroy',
  }),
};
