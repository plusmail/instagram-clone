import {useEffect, useState} from "react";
import './peopleStyle.css'

const People = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetch('/data/member.json', {method: 'GET'})
            .then((res) => (res.json()))
            .then((data) => {
                setMembers(data);
            });
    }, []);


    return (
        <div className={'body'}>
            <div className={'box'}>
                <div className={'box-name-box'}>
                    <h4 className={'box-name'}>추천</h4>
                </div>
                <div className={'box-members-box'}>
                    <div className={'box-members-box-2'}>
                    { members.map((member) => {
                        return (
                            <div className={'box-members'} key={member.id}>
                                <img src={member.userImg} alt={'profile'}/>
                                <div className={'member-text'}>
                                    <span className={'member-id'}>{member.userId}</span>
                                    <span>{member.text}</span>
                                </div>
                                <div className={'member-follow'}>팔로우</div>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>
            <footer>
                <div className={'footer-box'}>
                    <div className={'footer-navs'}>
                        <span className={'footer-nav'}><a href={'https://about.instagram.com/'} target={"_blank"} rel="noopener noreferrer">소개</a></span>
                        <span className={'footer-nav'}><a href={'https://help.instagram.com/'} target={"_blank"} rel="noopener noreferrer">도움말</a></span>
                        <span className={'footer-nav'}><a href={'https://about.instagram.com/blog'} target={"_blank"} rel="noopener noreferrer">홍보 센터</a></span>
                        <span className={'footer-nav'}><a href={'https://developers.facebook.com/docs/instagram'} target={"_blank"} rel="noopener noreferrer">API</a></span>
                        <span className={'footer-nav'}><a href={'https://about.instagram.com/about-us/careers'} target={"_blank"} rel="noopener noreferrer">채용 정보</a></span>
                        <span className={'footer-nav'}><a href={'https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect'} target={"_blank"} rel="noopener noreferrer">개인정보처리방침</a></span><br/><br/>
                        <span className={'footer-nav'}><a href={'https://help.instagram.com/581066165581870/?locale=ko_KR'} target={"_blank"} rel="noopener noreferrer">약관</a></span>
                        <span className={'footer-nav'}><a href={'https://www.instagram.com/explore/locations/'} target={"_blank"} rel="noopener noreferrer">위치</a></span>
                        <span className={'footer-nav'}>언어</span>
                    </div>
                    <div className={'else2'}>
                        © 2022 INSTAGRAM FROM META
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default People;