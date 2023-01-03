import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';
import * as emailCtrl from '../../lib/email';

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/send', emailCtrl.send);
posts.post('/cert', emailCtrl.cert);
posts.post('/', checkLoggedIn, postsCtrl.write);
posts.get('/:id', postsCtrl.read);
posts.delete('/:id', checkLoggedIn, postsCtrl.remove);
posts.put('/:id', checkLoggedIn, postsCtrl.replace);
posts.patch('/:id', checkLoggedIn, postsCtrl.update);

export default posts;
