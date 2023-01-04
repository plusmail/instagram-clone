import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const parseCookies = (cookie = '') =>
    cookie
        .split(';')
        .map(v => v.split('='))
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});

const jwtMiddleware = async (req, res, next) => {
    // const cookies = parseCookies(req.cookies);
    const token = req.cookies.access_token;

    if (!token) return next(); // 토큰이 없음
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);



        let user = {
            _id: decoded._id,
            username: decoded.username,
        }

        res.locals.user = user;
        // res.json({"user":user});

        // 토큰의 남은 유효 기간이 3.5일 미만이면 재발급
        const now = Math.floor(Date.now() / 1000);
        if (decoded.exp - now < 60 * 60 * 24 * 3.5) {
            const user = await User.findById(decoded._id);
            const token = user.generateToken();
            res.cookies('access_token', token, {
                maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
                httpOnly: true,
            });
        }

        console.log("jwtMiddleware->", res.locals.user);

        return next();
    } catch (e) {
        //토큰 검증 실패
        return next();
    }
};

export default jwtMiddleware;
