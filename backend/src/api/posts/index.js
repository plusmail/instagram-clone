import express from 'express';
const router = express.Router();

import * as postsCtrl from './posts.ctrl.js';
import checkLoggedIn from '../../lib/checkLoggedIn.js';
import * as emailCtrl from '../../lib/email.js';


router.get('/', postsCtrl.list);
router.post('/send', emailCtrl.send);
router.post('/cert', emailCtrl.cert);
router.post('/', postsCtrl.write);
router.get('/:id', postsCtrl.read);
router.delete('/:id', checkLoggedIn, postsCtrl.remove);
router.put('/:id', checkLoggedIn, postsCtrl.replace);
router.patch('/:id', checkLoggedIn, postsCtrl.update);

export default router;
