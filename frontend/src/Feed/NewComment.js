import React, {useState} from 'react';
import '../Feed/MainFeed.css'
import {BsHeart} from "react-icons/bs";

const NewComment = ({ item: { commentValue }, userName, deleteComment }) => {
    const [style, setStyle] = useState({opacity: 0});

    const mouseEnter = () => {
        setStyle({opacity: 1});
    }

    const mouseLeave = () => {
        setStyle({opacity: 0});
    }


    return (
        <div className="comment_list"  onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <div className="idAndComments">
                <div className={'idAndComment'}>
                    <span><strong>{userName}</strong></span>
                    <span className='comment-Value'>{commentValue}</span>
                    <span className='Delete' style={style} onClick={deleteComment}>X</span>
                </div>
                <span className={'heart'}><BsHeart/></span>
            </div>
        </div>
    );
};

export default NewComment;