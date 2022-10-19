import {useEffect, useState} from 'react';
import './suggestStyle.css'
import imgLogo from './default_profile.png'

const Suggest = ({user}) => {
    const [members, setMember] = useState([]); // mock data의 유저 데이터
    // const [myId, setMyId] = useState([]); // 백엔드에서 끌고 올 로그인 한 아이

    // json 파일로 만든 mock data를 useEffect fetch를 이용하여 끌고와서 useState에 저장
    useEffect(() => {
        fetch('/data/member.json', {method: 'GET'})
            .then((res) => (res.json()))
            .then((data) => {
                setMember(data);
            });
    }, []);

    // fetch('api/auth/login', {
    //     method: 'GET',
    //     headers: {
    //         "username": ""
    //     }
    //
    // })




    // 백엔드에서 로그인한 아이디 가져오기
    // const signUpId = () => {
    //     fetch('', {
    //         method: "POST",
    //         body: JSON.stringify({
    //             username: id
    //         }),
    //     })
    //         .then((res) => (res.json()))
    //         .then((result) => console.log('결과:', result));
    // }


    // 원본 배열을 보존하기 위해 전개연산자('...')를 사용
    const suggest = [...members];

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

    shuffle(suggest); // 새로고침 할 때마다 랜덤으로 돌아감
    suggest.splice(0, 18); // 앞에서부터 18개 제거 = 5개만 출력되도록

    // const follow

    return (
        <div className={'mainRight'}>
            <div className={'main-right-fixed'}>
                <div className={'myProfile'}>
                    <img src={imgLogo}
                         alt={'profile'}/>
                    <div className={'myProfile-text'}>
                        { user? (<span className={'my-id'}>{user.username}</span>) : (<span className={'my-id'}></span>)}
                    </div>
                    <span className={'follow'}>전환</span>
                </div>
                <div className={'suggestion'}>
                    <span className={'left'}>회원님을 위한 추천</span>
                    <span className={'right'}>모두 보기</span>
                </div>
                <div className={'suggestion-content'}>
                    { suggest.map((member) => {
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
                <div className={'else'}>
                    <span>소개 · </span>
                    <span>도움말 · </span>
                    <span>홍보 센터 · </span>
                    <span>API · </span>
                    <span>채용 정보 · </span>
                    <span>개인정보처리방침 · </span>
                    <span>약관 · </span>
                    <span>위치 · </span>
                    <span>언어</span>
                </div>
                <div className={'else2'}>
                    © 2022 INSTAGRAM FROM META
                </div>
            </div>
        </div>
    )
};

export default Suggest;
