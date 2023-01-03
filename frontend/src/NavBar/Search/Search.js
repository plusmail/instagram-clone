import React, {useEffect, useState} from "react";
import './Search.css';

function Search() {
    const [value, setValue] = useState('') //입력값을 저장
    const [userInfos, setUserInfo] = useState([]) //mock data를 저장

    useEffect(() => {
        if (value.length > 0) {
            fetch('/data/userInfo.json').then(
                res => res.json()
            ).then(Data => {
                setUserInfo([]);        //입력값의 길이가 0이상이면 json데이터를 끌어와서 userInfo에 저장
                let searchQuery = value.toLowerCase();  //입력값을 대소문자 구분없이 소문자로 변경
                for (const key in Data) {
                    let userId = Data[key].userId.toLowerCase();  //끌어온 json배열 userId를 소문자로 변경하여 userId변수에 저장
                    let userImg = Data[key].userImg      //끌어온 json배열 userImg를 userImg변수에 저장
                    let storage = Data[key].storage      //끌어온 json배열 storage를 storage변수에 저장
                    if (userId.slice(0, searchQuery.length).indexOf(searchQuery) !== -1) {  //indexOf를 통한 입력값을 감지하여 있다면 값을 반환하는 기능을 통해 검색기능 구현
                        setUserInfo(prevResult => {
                            return [...prevResult, {userId, userImg, storage}]
                        });
                    }
                }
            }).catch(error => {
                console.log(error);  //오류가 발생하면 콘솔에 출력
            })
        } else {
            setUserInfo([]); //조건을 만족시키지 못한다면 모든문자를 삭제
        }
    }, [value])
    console.log(userInfos)


    return (
        <div className='Searchbar'>
            <input id='Searchbar-css'
                   type='text'
                   className={'searchBar'}
                   onChange={(e) => setValue(e.target.value)}
                   value={value}
                   placeholder='검색' />

            <div className={'SearchBacks'}>
                <div className='SearchBack'>
                        {userInfos.map((userInfo) => (
                            <div className='search-info'>
                                {userInfo.storage === true ? (
                                    <div className='user-profile-img1'>
                                        <img className='user-profile-img' alt='userImg' src={userInfo.userImg}/>
                                    </div>)
                                    : (<div className='user-profile-img2'>
                                        <img className='user-profile-img' alt='userImg' src={userInfo.userImg}/>
                                    </div>) }
                                <span className='search-user-id'> {userInfo.userId}</span>
                            </div>
                        ))}
                </div>
            </div>
        </div>                  //map 함수를 이용하여 데이터를 출력하되, storage값이 true라면 user-profile-img1 css를 적용한 userImg를 출력하고,
                                //false라면 user-profile-img2 css를 적용한 userImg를 출력

    )
}

export default Search;