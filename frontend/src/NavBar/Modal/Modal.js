import React, {useState, useEffect, useRef} from 'react';
import user from '../img/profile.svg';
import './modal.css';
import home from "../img/home.svg";
import share from "../img/share.svg";
import compass from "../img/compass.png";
import love from "../img/love.svg";
import saved from '../img/saved.png'
import settings from '../img/settings.png'
import plus from '../img/plus.png'
import change from '../img/change.png'
import Logout from "./Logout";
import {Link} from "react-router-dom";

function Modal() {

    const [open, setOpen] = useState(false);

    let menuRef = useRef(); //특정Dom을 선택하기 위해 Ref함수 선언

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false);
                console.log(menuRef.current);
            }
        };                          //Ref함수가 선언된 구역을 제외한 어느곳을 선택해도 모달창을 닫음

        document.addEventListener("mouseout", handler);


        return () => {
            document.removeEventListener("mouseout", handler);
        }

    });

    return (                            //온클릭 함수를 통해 온클릭함수 클릭시 모달창이 오픈됨
        <div className="Modal">
            <div className='menu-container' ref={menuRef}>
                <div className='menu-trigger'>
                    <img src={home} alt='home' width='24px' height='24px'/>
                    <img src={share} alt='share' width='24px' height='24px'/>
                    <img src={plus} alt='plus' width='24px' height='24px'/>
                    <img src={compass} alt='compass' width='24px' height='24px'/>
                    <img src={love} alt='love' width='24px' height='24px'/>
                    <img src={user} alt='Profile' onMouseOver={() => {
                        setOpen(!open)
                    }}></img>
                </div>

                <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
                    <span className='DropdownItem-css'>
                        <Link to={'/instagram/user'}><DropdownItem img={user} text={"프로필"}/></Link>
                        <Link to={'/instagram/user/save'}><DropdownItem img={saved} text={"저장됨"}/></Link>
                        <DropdownItem img={settings} text={"설정"}/>
                        <DropdownItem img={change} text={"계정전환"}/>
                        <div className='Log'>
                        <Logout/>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
}

function DropdownItem(props) {
    return (
        <li className='dropdownItem'>
            <img alt='userimg' src={props.img}></img>
            <a> {props.text} </a>
        </li>
    );
}           // 프로퍼티를 통해 이미지와 텍스트를 받아와서 모달창에 나타냄


export default Modal;
