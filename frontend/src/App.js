import { Route, Routes } from 'react-router-dom';
import LoginPage from './Authority/pages/LoginPage';
import RegisterPage from './Authority/pages/RegisterPage';
import WritePage from './Authority/pages/WritePage';
import PostPage from './Authority/pages/PostPage';
import Instagram from './Main/Instagram';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Instagram />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/@:username">
          <Route index element={<Instagram />} />
          <Route path=":postId" element={<PostPage />} />
          <Route path="*" element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
