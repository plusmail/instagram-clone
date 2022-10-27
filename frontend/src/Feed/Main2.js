import {useState} from 'react';
import './MainFeed.css';
import {BsHeart, BsHeartFill, BsChat} from 'react-icons/bs'
import {IoPaperPlaneOutline} from "react-icons/io5";
import {VscEllipsis} from "react-icons/vsc";
import {BiBookmark} from "react-icons/bi";
import FeedContainer from './FeedContainer';

const Main2 = () => {

    const [likeclick, setLikeclick] = useState(true);
    const [showMore, setShowMore] = useState(false);
    const text = "#불꽃놀이 #한국감성 #맑은날 #서울세계불꽃축제 #소니 #0313 "
        + " #sel55f18z #서울 #한강공원 # #한강데이트 #Firework"
        + " #야경맛집 #반포대교 #하늘공원 #한강"
        + " #travelphotography #yulljjang #남산타워 #망원한강공원";

    return (
        <div className="main-feed">
            <div className="feed-name">
                <div className={'feed-names'}>
                    <div className={'feed-name-box'}>
                        <div className="profile-box">
                            <img className="profile-img"
                                 src="https://i.pinimg.com/474x/b4/da/8a/b4da8a5c4cd58edfe459fc158bff7585--hello-kitty.jpg"
                                 alt='profile'/>
                        </div>
                        <span className="feed-name-txt"> wexi_ku </span>
                    </div>
                </div>
                <span className='feed-menu'><VscEllipsis/></span>
            </div>
            <div className="border feed-box">
                <div className='feed-img-box'>
                    <img className="feed-img" src="./img/22.jpg" alt='feed-img'/>
                </div>
                <div className="feed-content">
                    <div className={'feed-icon'}>
                        <button className='likebt' onClick={() => setLikeclick(!likeclick)}>
                            {likeclick ? <BsHeart/> : <BsHeartFill className='redheart'/>}
                        </button>
                        <span className='rebt'>
                            <BsChat/>
                        </span>
                        <span className='dmbt'>
                            <IoPaperPlaneOutline/>
                        </span>
                        <span className='bookmark'>
                            <BiBookmark/>
                        </span>
                    </div>
                    <div className="feed-like">
                        <p><b>좋아요 10개</b></p>
                    </div>
                    <div className='feed-txt'>
                        <b>wexi_ku</b> 서울,여의도한강공원 서울불꽃축제
                        내년 불꽃축제때 여의도 한강공원에 가야하는 이유는
                        이 사진들로 설명하기 충분
                    </div>
                    <div className='Hash'>
                        {showMore ? text : `${text.substring(0, 32)}`}
                        <button className='btn' onClick={() => setShowMore(!showMore)}>
                            {showMore ? "닫기" : "...더보기"}
                        </button>
                    </div>
                    <div className='time'>
                        3시간 전
                    </div>
                    <div>
                        <FeedContainer/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main2;