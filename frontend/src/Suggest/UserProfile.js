import {useEffect, useState} from "react";
import { BiLockAlt } from "react-icons/bi";
import './userprofileStyle.css';

const UserProfile = () => {
    // SuggestContainer에서 로그인한 유저의 아이디를 user로 받아옴
    const [members, setMembers] = useState([]); // mock data의 유저 데이터

    // json 파일로 만든 mock data를 useEffect fetch를 이용하여 끌고와서 useState에 저장
    useEffect(() => {
        fetch('/data/member.json', { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                setMembers(data);
            });
    }, []);

    return (
        <div>
            {members.map((member) => {
                return (
                    <div className={'user-box'}> {/* 전체 박스 */}
                        {/* 프로필 */}
                        <div className={'user-profile'}>
                            <div className={'user-profile-img'}>
                                <img src={member.userImg} alt={'profile'}/>
                            </div>
                            <section className={'user-profile-text'}>
                                <div className={'user-profile-text-name-box'}>
                                    <span className={'user-profile-name'}>{member.userId}</span>
                                    <div className={'user-profile-follow'}>
                                        <span>{member.text}</span>
                                    </div>
                                </div>
                            </section>
                        </div>
                        {/* 게시물 팔로워 팔로우 박스 */}
                        <div className={'user-profile-elses'}>
                            <ul className={'user-profile-else'}>
                                <li>게시물<br/><span>{member.post}</span></li>
                                <li>팔로워<br/><span>{member.follower}</span></li>
                                <li>팔로우<br/><span>{member.follow}</span></li>
                            </ul>
                        </div>
                        {/* 게시글 내용  */}
                        <div className={'user-text-box'}>
                            <div className={'user-text-box-icons'}>
                                <BiLockAlt className={'user-text-box-icon'}/>
                            </div>
                            <h5>비공개 계정입니다</h5>
                            <p>사진과 동영상을 보려면 이 계정을 팔로우하세요</p>
                        </div>
                        {/* 팔로우 버튼 */}
                        <div className={'user-profile-button'}>
                            <button type={'submit'}>팔로우</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default UserProfile;