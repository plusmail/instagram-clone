import React from 'react';

const NewComment = ({ item: { commentValue }, deleteComment }) => {
    return (
        <div className="comment_list">
            <div className="idAndComment">
                <strong>아이디 없음 </strong>
                <p>{commentValue}</p>
            </div>
            <span onClick={deleteComment}>X</span>
        </div>
    );
};

export default NewComment;