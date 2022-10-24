import MyPageContainer from '../../MyPage/MyPageContainer';
import NavBar from "../../NavBar/NavBar";


function InstagramMyPage() {
  return (
      <div className={'instagram'}>
          <div className={'nav'}>
              <NavBar/>
          </div>
          <div className={'myPage'}>
              <MyPageContainer />
          </div>
      </div>
  );
}

export default InstagramMyPage;
