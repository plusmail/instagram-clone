import Post from '../../models/post.js';
import {ObjectId} from 'mongodb';

let postId = 1; // id의 초깃값입니다

export const write = async (req, res) => {
  console.log("333333333->", req.body);
  // REST API의 Request Body는 ctx.request.body에서 조회할 수 있습니다.
  // const { title, body } = req.body;
  postId += 1; // 기존 postId 값에 1을 더합니다

  try {
    const post = await Post({"title":"aaaaaaaaaaa","body":"bbbbbbbbbbbb"});
    await post.save();

    return res.status(200).json(post);
  }catch (err){
    return res.status(500).json(err);
  }

};

/* 포스트 목록 조회
GET /api/posts
*/
export const list = async (req, res) => {
  try {
    const post = await Post.find({});
    console.log("444444444->", post[0].id);

    return res.status(200).json(post);
  }catch (err){
    return res.status(500).json(err);
  }
};

/* 특정 포스트 조회
GET /api/posts/:id
*/
export const read = async (req, res, next) => {
  const { id } = req.params;

  try {
    const post = await Post.findOne({_id:id}).exec();
    return res.status(200).json(post);
  }catch (err){
    console.log(err);
    return res.status(500).json({"message":"포스트가 존재하지 않습니다"});
  }

};

/* 특정 포스트 제거
    DELETE /api/posts/:id
    */
export const remove = (req, res, next) => {
  const { id } = req.params;
  // 해당 id를 가진 post가 몇 번째인지 확인합니다.
  const index = posts.findIndex((p) => p.id.toString() === id);
  //포스트가 없으면 오류를 반환합니다.
  if (index === -1) {
    res.status = 404;
    res.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }
  //index번째 아이템을 제거합니다.
  posts.splice(index, 1);
  res.status = 204; // No Content
};

/* 포스트 수정(교체)
   PUT /api/posts/:id
   {title, body}
   */
export const replace = (req,res, next) => {
  // PUT 메서드는 전체 포스트 정보를 입력하여 데이터를 통째로 교체할 때 사용합니다.
  const { id } = req.params;
  // 해당 id를 가진 post가 몇 번째인지 확인합니다.
  const index = posts.findIndex((p) => p.id.toString() === id);
  //포스트가 없으면 오류를 반환합니다.
  if (index === -1) {
    res.status = 404;
    res.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }
  //전체 객체를 덮어 씌웁니다.
  // 따라서 id를 제외한 기존 정보를 날리고, 객체를 새로 만듭니다.
  posts[index] = {
    id,
    ...res.request.body,
  };
  res.body = posts[index];
};

/*포스트 수정( 특정 필드 변경)
  PATCH /api/posts/:id
  {title, body}
  */
export const update = (req, res, next) => {
  //PATCH 메서드는 주어진 필드만 교체합니다.
  const { id } = req.params;
  //해당 id를 가진 post가 몇 번째인지 확인합니다.
  const index = posts.findIndex((p) => p.id.toString() === id);
  //포스트가 없으면 오류를 반환합니다.
  if (index === -1) {
    res.status = 404;
    res.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }
  // 기존 값에 정보를 덮어 씌웁니다.
  posts[index] = {
    ...posts[index],
    ...res.request.body,
  };
  res.body = posts[index];
};
