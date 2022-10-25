import {useState} from 'react';
import './MainFeed.css';
import {BsHeart, BsChat} from 'react-icons/bs'
import {IoPaperPlaneOutline} from "react-icons/io5";
import {VscEllipsis} from "react-icons/vsc";
import {BiBookmark} from "react-icons/bi";
import FeedContainer from './FeedContainer';

const Main3 = () => {

    const [showMore, setShowMore] = useState(false);
    const text = "  #골든리트리버 #시골감성 #화창한날 #돌담에서 #멈무 #0629 "
        + " #골댕이 #시골 #시골여행 #주말여행 #여행스타그램 #sunny day"
        + " #시고르골댕이 #정말귀여워 #대형견 #강아지친구"
        + " #왕크왕귀 #lovedog #cutedog #반려견";


    return (
        <div className="main-feed">
            <div className="feed-name">
                <div className={'feed-names'}>
                    <div className={'feed-name-box'}>
                        <div className="profile-box">
                            <img className="profile-img"
                                 src={"https://i.pinimg.com/550x/12/2e/ba/122eba7ccd3923c06bcc11307f8147a7.jpg"} alt='profile'/>
                        </div>
                        <span className="feed-name-txt"> awzd_qwe </span>
                    </div>
                </div>
                <span className='feed-menu'><VscEllipsis/></span>
            </div>
            <div className="border feed-box">
                <div className='feed-img-box'>
                    <img className="feed-img" src="./img/23.jpg" alt='feed-img'/>
                </div>
                <div className="feed-content">
                    <div className={'feed-icon'}>
                        <span className='likebt'>
                            <BsHeart/>
                        </span>
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
                        <b>awzd_qwe</b> 시골에서 만난 골든리트리버!
                    </div>
                    <div className='Hash'>
                        {showMore ? text : `${text.substring(0, 30)}`}
                        <span className='btn' onClick={() => setShowMore(!showMore)}>
                            {showMore ? "닫기" : "...더보기"}
                        </span>
                    </div>
                    <div className='time'>
                        13시간 전
                    </div>
                    <div>
                        <FeedContainer/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main3;