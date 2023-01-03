import posts from './posts/index.js';
import auth from './auth/index.js';

import express from 'express';
const router = express.Router();

router.use('/posts', posts);
router.use('/auth', auth);

//라우터를 내보냅니다.
export default router;
