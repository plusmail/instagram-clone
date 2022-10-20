import HeaderContainer from '../../Authority/containers/common/HeaderContainer';
import MyPageTagContainer from "../../MyPage/MyPageTagContainer";


function InstagramMyPageTag() {
    return (
        <div className={'all'}>
            {/*임시 로그아웃 버튼*/}
            <HeaderContainer />
            <div className={'fixed'}>{/*네비바 여기 오면 됩니다.*/}</div>
            <MyPageTagContainer/>
        </div>
    );
}

export default InstagramMyPageTag;
