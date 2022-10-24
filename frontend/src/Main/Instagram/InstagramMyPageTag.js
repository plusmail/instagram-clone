import MyPageTagContainer from '../../MyPage/MyPageTagContainer';
import NavBar from "../../NavBar/NavBar";

function InstagramMyPageTag() {
  return (
      <div className={'instagram'}>
          <div className={'nav'}>
              <NavBar/>
          </div>
          <div className={'myPage'}>
              <MyPageTagContainer />
          </div>
      </div>
  );
}

export default InstagramMyPageTag;
