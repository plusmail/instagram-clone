import React, {useState} from 'react';
import '../Feed/MainFeed.css'
import {BsHeart, BsHeartFill} from "react-icons/bs";

const NewComment = ({ item: { commentValue }, userName, deleteComment }) => {
    const [style, setStyle] = useState({opacity: 0});

    const mouseEnter = () => {
        setStyle({opacity: 1});
    }

    const mouseLeave = () => {
        setStyle({opacity: 0});
    }

    const [likeclick, setLikeclick] = useState(true);


    return (
        <div className="comment_list"  onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <div className="idAndComments">
                <div className={'idAndComment'}>
                    <span><strong>{userName}</strong></span>
                    <span className='comment-Value'>{commentValue}</span>
                    <span className='Delete' style={style} onClick={deleteComment}>X</span>
                </div>
                <span className={'heart'} onClick={() => setLikeclick(!likeclick)}>
                                            {likeclick ? <BsHeart/> : <BsHeartFill className='redheart'/>}
                                            </span>
            </div>
        </div>
    );
};

export default NewComment;