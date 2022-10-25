import { useSelector } from "react-redux";
import { useState } from "react";
import NewComment from "./NewComment";
import '../Feed/MainFeed.css'
import { RiEmotionHappyLine } from "react-icons/ri";


const FeedContainer = () => {
    const { user } = useSelector(({ user }) => ({ user: user.user }));
    const [comment, setComment] = useState('');
    const [commentList, setCommentList] = useState([]);
    const userName = user.username
    const getInputValue = (e) => {
        setComment(e.target.value);
    };

    const addToList = e => {
        e.preventDefault();
        const id = new Date().getTime();
        const commentValue = comment;
        setCommentList([...commentList, { id, commentValue, userName }]);
        setComment('');
    };

    const deleteComment = idVal => {
        setCommentList(commentList.filter(comment => comment.id !== idVal));
    };


    return (
        <div>
            <div>
                {commentList.map((comment, index) => (
                    <NewComment
                        item={comment}
                        key={index}
                        deleteComment={() => deleteComment(comment.id)}
                        userName={userName}
                    />
                ))}
            </div>

            <form className="feed-Container" onSubmit={addToList}>
                <div className="Comment-imo">
                    <RiEmotionHappyLine />
                </div>
                <input className="Comment-text"
                    type="text"
                    value={comment}
                    placeholder="댓글달기...."
                    onChange={getInputValue}
                />
                <button disabled={comment.length <= 0} className="Comment-input">
                    <b>게시</b>
                </button>
            </form>
        </div>
    )
}
export default FeedContainer;