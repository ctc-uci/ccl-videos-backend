require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo").default;
const cors = require("cors");
const app = express();
const lessonRouter = require('./routers/lesson.router');
const codeRouter = require('./routers/code.router');
const uploadRouter = require('./routers/s3upload.router');
const authRouter = require('./routers/auth.router');
const config = require('./config');

mongoose.connect(process.env.MONGO_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const mongoConnection = mongoose.connection;
mongoConnection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

app.use(
  session({
    secret: "secrettaefrjah",
    resave: true,
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
  console.log('ping');
  res.send("Hello World!");
  session.test = "test";
});


app.use('/auth', authRouter);
app.use('/lessons', lessonRouter);
app.use('/codes', codeRouter);
app.use('/upload', uploadRouter);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
