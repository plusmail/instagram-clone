import {Route, Routes} from "react-router-dom";
import PostListPage from "./Authority/pages/PostListPage";
import LoginPage from "./Authority/pages/LoginPage";
import RegisterPage from "./Authority/pages/RegisterPage";
import WritePage from "./Authority/pages/WritePage";
import PostPage from "./Authority/pages/PostPage";
import Instagram from "./Main/Instagram";


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<PostListPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/write" element={<WritePage />} />
                <Route path="/@:username">
                    <Route index element={<PostListPage />} />
                    <Route path=":postId" element={<PostPage />} />
                </Route>
                <Route path={"/instagram"} element={<Instagram/>}/>
            </Routes>

        </>

    );
}

export default App;
