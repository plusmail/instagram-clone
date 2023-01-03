import Joi from 'joi';
import User from '../../models/user.js';
import  nodemailer from 'nodemailer';
import {send, cert} from '../../lib/email.js';
import axios from 'axios';

//회원가입
/*
 POST /api/auth/register
 {
    username: 'velopert'
    password: 'mypass123'
 }
 */
export const register = async (req, res, next) => {
  // Request Body 검증하기
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(20).required(),
    // uname: Joi.string().required(),
    password: Joi.string().required(),
  });
  const result = schema.validate(req.request.body);
  if (result.error) {
    res.status = 400;
    res.body = result.error;
    return;
  }

  const { username, password } = req.request.body;
  try {
    // username이 이미 존재하는지 확인
    const exists = await User.findByUsername(username);
    if (exists) {
      res.status = 409; //Conflict
      return;
    }
    const user = new User({
      username,
    });


    await user.setPassword(password); // 비밀번호 설정
    await user.save(); // 데이터베이스에 저장

    // export const localRegister = ({email, username, password}) => axios.post('/posts/send', { email, username, password });


    //응답할 데이터에서 hashedPassword 필드 제거
    res.body = user.serialize();

    const token = user.generateToken();
    res.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7, //7일
      httpOnly: true,
    });
  } catch (e) {
    res.throw(500, e);
  }
};

//로그인
/*
 POST /api/auth/login
 {
    username: 'velopert'
    password: 'mypass123'
 }
 */
export const login = async (req, res, next) => {
  const { username, password } = req.request.body;

  //username, password가 없으면 에러 처리
  if (!username || !password) {
    res.status = 401; //Unauthorized
    return;
  }

  try {
    const user = await User.findByUsername(username);
    //계정이 존재하지 않으면 에러 처리
    if (!user) {
      res.status = 401;
      return;
    }
    const valid = await user.checkPassword(password);
    //잘못된 비밀번호
    if (!valid) {
      res.status = 401;
      return;
    }
    res.body = user.serialize();
    const token = user.generateToken();
    res.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7, //7일
      httpOnly: true,
    });
  } catch (e) {
    res.throw(500, e);
  }
};

//로그인 상태 확인
export const check = async (req, res, next) => {
  const { user } = req.state;
  if (!user) {
    // 로그인 중 아님
    res.status = 401; // Unauthorized
    return;
  }
  res.body = user;
};

//로그아웃
/*
Get /api/auth/logout
*/
export const logout = async (req, res, next) => {
  res.cookies.set('access_token');
  res.status = 204; // No Content
};
