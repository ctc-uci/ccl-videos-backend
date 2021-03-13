require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo').default;
const app = express();
const lessonRouter = require('./routers/lesson.router');
const config = require('./config');

const authRouter = require('./routers/auth.router');
const middleware = require('./middleware');
const initApp = require('./initAuth');

mongoose.connect(process.env.MONGO_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(
  session({
    secret: 'secrettaefrjah',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      ttl: 24 * 60 * 60, // 1 day
    }),
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(middleware.cors);
app.use(middleware.session);
app.use(middleware.cookie);

// Local variables
app.locals.client = initApp(app);

// make sure app is running
app.get('/', (req, res) => {
  res.send('Hello World!');
  session.test = 'test';
  console.log(session.test);
});

app.use('/lessons', lessonRouter);
app.use('/auth', authRouter);

app.listen(config.port, () => {
  console.log(`Example app listening at http://localhost:${config.port}`);
});
