import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './Authority/pages/LoginPage';
import RegisterPage from './Authority/pages/RegisterPage';
import Instagram from './Main/Instagram/Instagram';
import InstagramPeople from './Main/Instagram/InstagramPeople';
import InstagramMyPage from './Main/Instagram/InstagramMyPage';
import InstagramMyPageSave from './Main/Instagram/InstagramMyPageSave';
import InstagramMyPageTag from './Main/Instagram/InstagramMyPageTag';

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('user');
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route
          path="/instagram"
          element={
            <ProtectedRoute>
              <Instagram />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path={'instagram/people'} element={<InstagramPeople />} />
        <Route path={'instagram/user'} element={<InstagramMyPage />} />
        <Route path={'instagram/user/save'} element={<InstagramMyPageSave />} />
        <Route path={'instagram/user/tag'} element={<InstagramMyPageTag />} />
      </Routes>
    </>
  );
}

export default App;
