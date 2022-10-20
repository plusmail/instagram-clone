import './storyStyle.css'
import {useEffect, useRef, useState} from "react";

const Story = () => {
    const [members, setMember] = useState([]);

    // json 파일로 만든 mock data를 useEffect fetch를 이용하여 끌고와서 useState에 저장
    useEffect(() => {
        fetch('/data/friend.json', {method: 'GET'})
            .then((res) => (res.json()))
            .then((data) => {
                shuffle(data) // 처음 값을 넣을 때 부터 데이터를 섞어서 넣음 // shuffle을 다른 곳에 쓰면 버튼 클릭 이벤트가 발생했을 때 계속 shuffle이 일어남
                setMember(data);
            });
    }, [setMember]); // setMember가 업데이트될 때만 useEffect가 작동 // shuffle한 데이터를 setMember에 넣었기 때문에 members가 아니라 setMember가 들어가야함


    // 피셔-예이츠 셔플(Fisher-Yates shuffle): 무작위로 값을 섞을 때 사용하는 알고리즘 중 가장 대표적인 알고리즘
    function shuffle(array) {
        for (let index = array.length - 1; index > 0; index--) {
            // 무작위 index 값을 만듬 (0 이상의 배열 길이 값)
            const randomPosition = Math.floor(Math.random() * (index + 1));

            // 원본 값을 임시로 저징하고, randomPosition을 이용해 배열 요소를 섞는다.
            const temporary = array[index];
            array[index] = array[randomPosition];
            array[randomPosition] = temporary;
            // array.sort(() => Math.random() -0.5); 모든 환경에서 무작위로 값을 잘 반환하는지 알 수 없음, 순열 생성 빈도가 한쪽으로 편향
        }
    }

    // 버튼 구현
    const carousel = useRef();
    const [nowX, setNowX] = useState(0);

    useEffect(() => {
        carousel.current.style.transform = `translateX(${nowX}vw)`;
    }, [nowX]);

    const prevButton = (e) => {
        e.preventDefault()
        if (nowX === 0) { // nowX가 0이면 왼쪽으로 이동하지 않음
            setNowX(nowX);
        } else {
            setNowX((prop) => prop + 5);
            // console.log(`it's work ${nowX}`); // 작동하는지 확인
        }
    };

    const nextButton = (e) => {
        e.preventDefault()
        if (nowX === -5) {
             // nowX가 -7이면 클릭해도 다음으로 넘어가지 않음
        } else {
            setNowX(nowX - 5);
        }
        // console.log(`it's work ${nowX}`); // 작동하는지 확인
    };


    return (
        <div className={'story'}>
            <div className={'storyBox'}>
                <button aria-label={"next"} className={"button button-prev"} onClick={prevButton}>&lt;</button>
                <button aria-label={"next"} className={"button button-next"} onClick={nextButton}>&gt;</button>
                <div className={'storyItemsBox'} ref={carousel}>
                    {/* eslint-disable-next-line array-callback-return */}
                    {members.map((member) => {
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
