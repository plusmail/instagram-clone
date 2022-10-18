import './storyStyle.css'
import {useEffect, useState} from "react";

const Story = () => {
    const [members, setMember] = useState([]);

    // json 파일로 만든 mock data를 useEffect fetch를 이용하여 끌고와서 useState에 저장
    useEffect(() => {
        fetch('/data/friend.json', {method: 'GET'})
            .then((res) => (res.json()))
            .then((data) => {
                setMember(data);
            });
    }, []);

    // 원본 배열을 보존하기 위해 전개연산자('...')를 사용
    const userMembers = [...members];

    // 피셔-예이츠 셔플(Fisher-Yates shuffle): 무작위로 값을 섞을 때 사용하는 알고리즘 중 가장 대표적인 알고리즘
    function shuffle(array) {
        for (let index = array.length - 1; index > 0; index--) {
            // 무작위 index 값을 만듬 (0 이상의 배열 길이 값)
            const randomPosition = Math.floor(Math.random() * (index + 1));

            // 원본 값을 임시로 저징하고, randomPosition을 이용해 배열 요소를 섞는다.
            const temporary = array[index];
            array[index] = array[randomPosition];
            array[randomPosition] = temporary;
            // array.sort(() => Math.random() -0.5); 모든 환경에서 무작위로 값을 잘 반환하는지 알 수 없음
        }
    }

    shuffle(userMembers); // 새로고침 할 때마다 랜덤으로 돌아감

    return (
        <div className={'story'}>
            <div className={'storyBox'}>
                <div className={'storyItemsBox'}>
                    {/* eslint-disable-next-line array-callback-return */}
                    {userMembers.map((member) => {
                        if (member.storage === true) {
                            return (
                                <div className={'story-item'} key={member.id}>
                                    <div className={'story-img'}>
                                        <img src={member.userImg} alt={'profile'}/>
                                    </div>
                                    <div className={'story-id'}>
                                        {member.userId}
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
};

export default Story;
