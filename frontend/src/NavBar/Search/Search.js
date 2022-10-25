import React, {useEffect, useState} from "react";
import './Search.css';

function Search() {
    const [value, setValue] = useState('') //입력값을 저장
    const [userInfos, setUserInfo] = useState([]) //mock data를 저장

    useEffect(() => {
        if (value.length > 0) {
            fetch('/data/member.json').then(
                res => res.json()
            ).then(Data => {
                setUserInfo([]);
                let searchQuery = value.toLowerCase();
                for (const key in Data) {
                    let user = Data[key].userId.toLowerCase();
                    let user2 = Data[key].userImg
                    if (user.slice(0, searchQuery.length).indexOf(searchQuery) !== -1) {  //찾는문자열이 없으면 -1을 반환하는 indexof를 활
                        setUserInfo(prevResult => {
                            return [...prevResult, {user, user2}]
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

            <div className='SearchBack'>
                <div className='Searchbar-line'>
                    {userInfos.map((userInfo) => (
                        <div className='search-info'>
                            <img className='user-profile-img' alt='userimg' src={userInfo.user2}/>
                            <p className='user-id'> {userInfo.user}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Search;