import express from 'express';
const router = express.Router();

import * as authCtrl from './auth.ctrl.js';

router.post('/register', authCtrl.register);
router.post('/login', authCtrl.login);
router.get('/check', authCtrl.check);
router.post('/logout', authCtrl.logout);

export default router;
