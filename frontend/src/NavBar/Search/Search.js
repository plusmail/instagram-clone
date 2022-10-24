import React, {useEffect, useState} from "react";
import './Search.css';

function Search(props) {
    const[value, setValue] = useState('') //입력값을 저장
    const[userInfo, setUserInfo]= useState([]) //mock data를 저장

    useEffect(()=> {
        if(value.length > 0) {
            fetch('/data/member.json').then(
                res => res.json()
            ).then(Data => {
                setUserInfo([]);
                let searchQuery = value.toLowerCase();
                for(const key in Data) {
                    let user = Data[key].userId.toLowerCase();
                    if(user.slice(0,searchQuery.length).indexOf(searchQuery) !== -1) {
                        setUserInfo(prevResult => {
                            return [...prevResult, Data[key].userId]
                        });
                    }
                }
            }).catch(error => {
                console.log(error);
            })
        }else{
            setUserInfo([]);
        }
    }, [value])
    console.log(userInfo)

    return (
        <div className='Searchbar'>
            <input type='text'
                   className={'searchBar'}
                   onChange={(e) => setValue(e.target.value)}
                   value={value}
                   placeholder='검색'
            />
            <div className='SearchBack'>
                {userInfo.map((userInfo, index) => (
                    <a href='#' key={index}>
                    <div className= 'qwer'>
                        {userInfo}
                    </div>
                        <div>
                            <img src={userInfo.userImg}/>
                        </div>
                        </a>
                ))}
            </div>
        </div>
    )
}

export default Search;