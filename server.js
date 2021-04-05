require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo").default;
const cors = require("cors");
const app = express();
const lessonRouter = require('./routers/lesson.router');
const codeRouter = require('./routers/code.router');
const config = require('./config');

mongoose.connect(process.env.MONGO_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(
  session({
    secret: "secrettaefrjah",
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
app.use(cors({ credentials: true, origin: true }));

// make sure app is running
app.get("/", (req, res) => {
  res.send("Hello World!");
  session.test = "test";
  console.log(session.test);
});

app.use('/lessons', lessonRouter);
app.use('/codes', codeRouter);

app.listen(config.port, () => {
  console.log(`Example app listening at http://localhost:${config.port}`);
});
