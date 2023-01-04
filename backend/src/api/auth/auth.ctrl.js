import Joi from 'joi';
import User from '../../models/user.js';
import nodemailer from 'nodemailer';
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
    //
    // console.log("regiser-333333->", req.body);
    // const result = schema.validate(req.body);
    // if (result.error) {
    //   res.status = 400;
    //   res.body = result.error;
    //   return;
    // }
    const {username, password} = req.body;
    try {
        const exists = await User.findOne({
            where: {username: username}
        });
        if (exists) {
            res.status(402).json({"message": "exists"});
            return;
        }
      console.log("regiser-000000000->");
        let user = await User({
            "username":username,
            "uname":"",
            "hashedPassword":"",

        });


        await user.setPassword(password); // 비밀번호 설정
        await user.save(); // 데이터베이스에 저장
        const token = await user.generateToken();
        res.cookie('access_token', token, {
            maxAge: 1000 * 60 * 60 * 24 * 7, //7일
            httpOnly: true,
        });
        res.status(203).json({"message":"success"});
    } catch (e) {
        res.status(500).json({"message": "error발생"});
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
    const {username, password} = req.body;

    //username, password가 없으면 에러 처리
    if (!username || !password) {
        res.status(401).json({"message":"auth fail"}); //Unauthorized
        return;
    }

    try {
        const user = await User.findOne({
                username : username,
        });

        //계정이 존재하지 않으면 에러 처리
        if (!user) {
            res.status(401).json({"authError":"idnotexits"});
            return;
        }
        const valid = await user.checkPassword(password);


        //잘못된 비밀번호
        if (!valid) {
            res.status(401).json({"authError":"passwordfail"});
            return;
        }
        res.body = user.serialize();
        const token = user.generateToken();
        res.cookie('access_token', token, {
            maxAge: 1000 * 60 * 60 * 24 * 7, //7일
            httpOnly: true,
        });
        res.status(201).json({"authError":null, "auth":user});
        return;
    } catch (e) {
        res.status(500);
        return;
    }
};

//로그인 상태 확인
export const check = async (req, res, next) => {
    const {user} = res.locals;
    // let user={};
    if (!user) {
        // 로그인 중 아님
        return res.status(401); // Unauthorized;
    }
    // res.body = user;
    return res.status(202).json(user);
};

//로그아웃
/*
Get /api/auth/logout
*/
export const logout = async (req, res) => {
    // res.cookie('access_token');
    res.clearCookie('access_token');
    res.locals.user=null;
    res.status(204).redirect("/login");

};

