import {useEffect, useState} from "react";

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
                    <div>

                        <div>
                            <div>
                                <img src={member.userImg} alt={'profile'}/>
                            </div>
                            <section>
                                <div>
                                    <span>{member.userId}</span>
                                    <div>
                                        <span>{member.text}</span>
                                    </div>
                                </div>
                            </section>
                        </div>

                        <div>
                            <ul>
                                <li>게시물<br/><span>0</span></li>
                                <li>팔로워<br/><span>0</span></li>
                                <li>팔로우<br/><span>0</span></li>
                            </ul>
                        </div>

                        <div>
                            <p>비공개 계정입니다</p>
                            <p>사진과 동영상을 보려면 이 계정을 팔로우하세요</p>
                        </div>

                        <div>
                            <button type={'submit'}>팔로우</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default UserProfile;