import React, {useEffect, useState} from "react";
import './Search.css';

function Search(props) {
    const[value, setValue] = useState('')
    const[userInput, setUserInput]= useState([])

    useEffect(()=> {
        if(value.length > 0) {
            fetch('/data/userInfo.json').then(
                res => res.json()
            ).then(Data => {
                setUserInput([]);
                let searchQuery = value.toLowerCase();
                for(const key in Data) {
                    let userInfo = Data[key].userId.toLowerCase();
                    if(userInfo.slice(0,searchQuery.length).indexOf(searchQuery) !== -1) {
                        setUserInput(prevResult => {
                            return [...prevResult, Data[key].userId]
                        });
                    }
                }
            }).catch(error => {
                console.log(error);
            })
        }else{
            setUserInput([]);
        }
    }, [value])

    return (
        <div className='Searchbar'>
            <input type='text'
                   className={'searchBar'}
                   onChange={(e) => setValue(e.target.value)}
                   value={value}
                   placeholder='검색'
            />
            <div className='searchBack'>
                {userInput.map((result, index) => (
                    <ul key={index}>
                        <div className={'searchEntry'}>
                            {result}
                        </div>
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default Search;