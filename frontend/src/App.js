import { Route, Routes } from 'react-router-dom';
import LoginPage from './Authority/pages/LoginPage';
import RegisterPage from './Authority/pages/RegisterPage';
import WritePage from './Authority/pages/WritePage';
import PostPage from './Authority/pages/PostPage';
import Instagram from './Main/Instagram/Instagram';
import InstagramPeople from "./Main/Instagram/InstagramPeople";
import InstagramMyPage from "./Main/Instagram/InstagramMyPage";
import InstagramMyPageSave from "./Main/Instagram/InstagramMyPageSave";
import InstagramMyPageTag from "./Main/Instagram/InstagramMyPageTag";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Instagram />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/@:username">
          <Route path={':instagram'} element={<Instagram />} />
          <Route path=":postId" element={<PostPage />} />
          <Route path="*" element={<LoginPage />} />
        </Route>
        <Route path={"/people"} element={<InstagramPeople/>}/>
        <Route path={"/user"} element={<InstagramMyPage/>}/>
        <Route path={"/user/save"} element={<InstagramMyPageSave/>}/>
        <Route path={"/user/tag"} element={<InstagramMyPageTag/>}/>
      </Routes>
    </>
  );
}

export default App;
