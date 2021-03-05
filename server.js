require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const lessonRouter = require('./routers/lesson.router');
const config = require('./config');

mongoose.connect(process.env.MONGO_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// make sure app is running
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/lessons', lessonRouter);

app.listen(config.port, () => {
  console.log(`Example app listening at http://localhost:${config.port}`);
});
