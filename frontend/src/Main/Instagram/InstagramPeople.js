import HeaderContainer from '../../Authority/containers/common/HeaderContainer';
import People from "../../Suggest/People";

function InstagramPeople() {
    return (
        <div className={'all'}>
            {/*임시 로그아웃 버튼*/}
            <HeaderContainer />
            <div className={'fixed'}>{/*네비바 여기 오면 됩니다.*/}</div>
            <People/>
        </div>
    );
}

export default InstagramPeople;
