import React, {useState, useEffect, useRef} from 'react';
import user from '../img/profile.svg';
import './modal.css';
import home from "../img/home.svg";
import share from "../img/share.svg";
import message from "../img/message.svg";
import love from "../img/love.svg";
import saved from '../img/saved.png'
import settings from '../img/settings.png'
import Header from "../../Authority/components/common/Header";
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
                    <img src={message} alt='message' width='24px' height='24px'/>
                    <img src={love} alt='love' width='24px' height='24px'/>
                    <img src={user} alt = 'Profile' onClick={()=>{setOpen(!open)}}></img>
                </div>

                <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
                    <ul>
                        <DropdownItem img = {user} text = {"Modal"}/>
                        <DropdownItem img = {saved} text = {"Saved"}/>
                        <DropdownItem img = {settings} text = {"Settings"}/>
                        <div className='Header'>
                        <Logout/>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}

function DropdownItem(props){
    return(
        <li className = 'dropdownItem'>
            <img src={props.img}></img>
            <a> {props.text} </a>
        </li>
    );
}

export default Modal;
