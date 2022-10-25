import React from 'react';
import '../Feed/MainFeed.css'

const NewComment = ({ item: { commentValue }, userName, deleteComment }) => {
    return (
        <div className="comment_list">
            <div className="idAndComment">
                <strong>{userName}</strong>
                <div className='comment-Value'>{commentValue}</div>
                <span className='Delete' onClick={deleteComment}>X</span>
            </div>
        </div>
    );
};

export default NewComment;