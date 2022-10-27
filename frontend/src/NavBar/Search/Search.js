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
                setUserInfo([]);
                let searchQuery = value.toLowerCase();
                for (const key in Data) {
                    let userId = Data[key].userId.toLowerCase();
                    let userImg = Data[key].userImg
                    let storage = Data[key].storage
                    if (userId.slice(0, searchQuery.length).indexOf(searchQuery) !== -1) {  //찾는문자열이 없으면 -1을 반환하는 indexof를 활
                        setUserInfo(prevResult => {
                            return [...prevResult, {userId, userImg, storage}]
                        });
                    }
                }
            }).catch(error => {
                console.log(error);
            })
        } else {
            setUserInfo([]);
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
                                    </div>)}
                                <span className='search-user-id'> {userInfo.userId}</span>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Search;