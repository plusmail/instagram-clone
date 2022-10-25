import React, {useState, useEffect, useRef} from 'react';
import user from '../img/profile.svg';
import './modal.css';
import home from "../img/home.svg";
import share from "../img/share.svg";
import compass from "../img/conpass.png";
import love from "../img/love.svg";
import saved from '../img/saved.png'
import settings from '../img/settings.png'
import plus from '../img/plus.png'
import change from '../img/change.png'
import Logout from "./Logout";

function Modal() {

    const [open, setOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e)=>{
            if(!menuRef.current.contains(e.target)){
                setOpen(false);
                console.log(menuRef.current);
            }
        };

        document.addEventListener("mousedown", handler);


        return() =>{
            document.removeEventListener("mousedown", handler);
        }

    });

    return (
        <div className="Modal">
            <div className='menu-container' ref={menuRef}>
                <div className='menu-trigger' >
                    <img src={home} alt='home' width='24px' height='24px'/>
                    <img src={share} alt='share' width='24px' height='24px'/>
                    <img src={plus} alt='plus' width='24px' height='24px'/>
                    <img src={compass} alt='compass' width='24px' height='24px'/>
                    <img src={love} alt='love' width='24px' height='24px'/>
                    <img src={user} alt = 'Profile' onClick={()=>{setOpen(!open)}}></img>
                </div>

                <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
                    <span className='DropdownItem-css'>
                        <DropdownItem img = {user} text = {"프로필"}/>
                        <DropdownItem img = {saved} text = {"저장됨"}/>
                        <DropdownItem img = {settings} text = {"설정"}/>
                        <DropdownItem img = {change} text = {"계정전환"}/>
                        <div className='Log'>
                        <Logout/>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
}

function DropdownItem(props){
    return(
        <li className = 'dropdownItem'>
            <img alt='userimg' src={props.img}></img>
            <a> {props.text} </a>
        </li>
    );
}

export default Modal;
