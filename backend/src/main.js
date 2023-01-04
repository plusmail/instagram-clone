import { createRequire } from "module";
const require = createRequire(import.meta.url);
require("dotenv").config();
import express from 'express';
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

import postsRouter from './api/posts/index.js';
import authRouter from './api/auth/index.js';

const app = express();



app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(jwtMiddleware);


app.use('/api/auth',authRouter);
app.use('/api/posts',postsRouter);


// PORT가 지정되어 있지 않다면 4000을 사용
const port = PORT || 4000;
app.listen(port, () => {
  console.log('Listening to port %d', port);
});

export default app;
