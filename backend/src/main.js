import { createRequire } from "module";
const require = createRequire(import.meta.url);
require("dotenv").config();
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
const router = express.Router();

import mongoose from 'mongoose';

import jwtMiddleware from './lib/jwtMiddleware.js';
//비구조화 할당을 통해 process.env 내부 값에 대한 레퍼런스 만들기
const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((e) => {
    console.error(e);
  });

import apiRouter from './api/index.js';
const app = express();

app.use('/',apiRouter);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }))
// 라우터 적용 전에 bodyParser 적용
app.use(bodyParser.json());
app.use(jwtMiddleware);


// PORT가 지정되어 있지 않다면 4000을 사용
const port = PORT || 4000;
app.listen(port, () => {
  console.log('Listening to port %d', port);
});

export default app;
