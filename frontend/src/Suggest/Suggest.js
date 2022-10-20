import {useEffect, useState} from 'react';
import './suggestStyle.css'
import imgLogo from './default_profile.png'
import {Link} from "react-router-dom";

const Suggest = ({user}) => { // SuggestContainer에서 로그인한 유저의 아이디를 user로 받아옴
    const [members, setMembers] = useState([]); // mock data의 유저 데이터

    // json 파일로 만든 mock data를 useEffect fetch를 이용하여 끌고와서 useState에 저장
    useEffect(() => {
        fetch('/data/member.json', {method: 'GET'})
            .then((res) => (res.json()))
            .then((data) => {
                setMembers(data);
            });
    }, []);


    // 피셔-예이츠 셔플(Fisher-Yates shuffle): 무작위로 값을 섞을 때 사용하는 알고리즘 중 가장 대표적인 알고리즘
    function shuffle(array) {
        for (let index= array.length -1; index > 0; index--) {
            // 무작위 index 값을 만듬 (0 이상의 배열 길이 값)
            const randomPosition = Math.floor(Math.random() * (index + 1));

            // 원본 값을 임시로 저징하고, randomPosition을 이용해 배열 요소를 섞는다.
            const temporary = array[index];
            array[index] = array[randomPosition];
            array[randomPosition] = temporary;
            // array.sort(() => Math.random() -0.5); 모든 환경에서 무작위로 값을 잘 반환하는지 알 수 없음
        }
    }

    shuffle(members); // 새로고침 할 때마다 랜덤으로 돌아감
    members.splice(0, 18); // 앞에서부터 18개 제거 = 5개만 출력되도록


    // 1000px 이하일 경우 없어짐
    return (
        <div className={'mainRight'}>
            <div className={'main-right-fixed'}>
                <div className={'myProfile'}>
                    <Link to={'user'}>
                        <img src={imgLogo} alt={'profile'}/>
                    </Link>
                    <div className={'myProfile-text'}>
                        { user? (<Link to={'user'} className={'my-id'}>{user.username}</Link>) : (<span className={'my-id'}></span>)} {/*받아온 user가 있을 때는 username 표시하고 없으면 공백 처리*/}
                    </div>
                    <span className={'follow'}>전환</span>
                </div>
                <div className={'suggestion'}>
                    <span className={'left'}>회원님을 위한 추천</span>
                    <Link to={'/people'} className={'right'}>모두 보기</Link>
                </div>
                <div className={'suggestion-content'}>
                    { members.map((member) => {
                        return (
                            <div className={'suggestedUser'} key={member.id}>
                                <img src={member.userImg} alt={'profile'}/>
                                <div className={'suggestedUser-text'}>
                                    <span className={'user-id'}>{member.userId}</span>
                                    <span>{member.text}</span>
                                </div>
                                <span className={'follow'}>팔로우</span>
                            </div>
                        )
                    })}
                </div>
                <div className={'else-nav'}>
                    <span><a href={'https://about.instagram.com/'} target={"_blank"} rel="noopener noreferrer">소개</a> · </span>
                    <span><a href={'https://help.instagram.com/'} target={"_blank"} rel="noopener noreferrer">도움말</a> · </span>
                    <span><a href={'https://about.instagram.com/blog'} target={"_blank"} rel="noopener noreferrer">홍보 센터</a> · </span>
                    <span><a href={'https://developers.facebook.com/docs/instagram'} target={"_blank"} rel="noopener noreferrer">API</a> · </span>
                    <span><a href={'https://about.instagram.com/about-us/careers'} target={"_blank"} rel="noopener noreferrer">채용 정보</a> · </span>
                    <span><a href={'https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect'} target={"_blank"} rel="noopener noreferrer">개인정보처리방침</a> · </span>
                    <span><a href={'https://help.instagram.com/581066165581870/?locale=ko_KR'} target={"_blank"} rel="noopener noreferrer">약관</a> · </span>
                    <span><a href={'https://www.instagram.com/explore/locations/'} target={"_blank"} rel="noopener noreferrer">위치</a> · </span>
                    <span>언어</span>
                </div>
                <div className={'else-text'}>
                    © 2022 INSTAGRAM FROM META
                </div>
            </div>
        </div>
    )
};

export default Suggest;
