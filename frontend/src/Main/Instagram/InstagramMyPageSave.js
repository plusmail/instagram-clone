import MyPageSaveContainer from '../../MyPage/MyPageSaveContainer';
import NavBar from "../../NavBar/NavBar";


function InstagramMyPageSave() {
  return (
      <div className={'instagram'}>
          <div className={'nav'}>
              <NavBar/>
          </div>
          <div className={'myPage'}>
              <MyPageSaveContainer />
          </div>
      </div>
  );
}

export default InstagramMyPageSave;
