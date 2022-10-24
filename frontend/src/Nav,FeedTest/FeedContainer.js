import './feedStyle.css'
import {useState} from "react";
import NewComment from "./Newcomment";

const FeedContainer = () => {
    const [comment, setComment] = useState('');
    const [commentList, setCommentList] = useState([]);

    const getInputValue = (e) => {
        setComment(e.target.value);
    };

    const addToList = e => {
        e.preventDefault();
        const id = new Date().getTime();
        const commentValue = comment;
        setCommentList([...commentList, {id, commentValue}]);
        setComment('');
    };

    const deleteComment = idVal => {
        setCommentList(commentList.filter(comment => comment.id !== idVal));
    };


    return (
        <div className={'body'}>
            <div className={'feed'}>
                <div>
                    {commentList.map((comment, index) => (
                        <NewComment
                            item={comment}
                            key={index}
                            deleteComment={() => deleteComment(comment.id)}
                        />
                    ))}
                </div>
                <form onSubmit={addToList}>
                    <input
                        type="text"
                        value={comment}
                        placeholder="댓글달기...."
                        onChange={getInputValue}
                    />
                    <button disabled={comment.length <= 0} className="button">
                        게시
                    </button>
                </form>
            </div>
            <div className={'feed'}>
                <div>
                    {commentList.map((comment, index) => (
                        <NewComment
                            item={comment}
                            key={index}
                            deleteComment={() => deleteComment(comment.id)}
                        />
                    ))}
                </div>
                <form onSubmit={addToList}>
                    <input
                        type="text"
                        value={comment}
                        placeholder="댓글달기...."
                        onChange={getInputValue}
                    />
                    <button disabled={comment.length <= 0} className="button">
                        게시
                    </button>
                </form>
            </div>
            <div className={'feed'}>
                <div>
                    {commentList.map((comment, index) => (
                        <NewComment
                            item={comment}
                            key={index}
                            deleteComment={() => deleteComment(comment.id)}
                        />
                    ))}
                </div>
                <form onSubmit={addToList}>
                    <input
                        type="text"
                        value={comment}
                        placeholder="댓글달기...."
                        onChange={getInputValue}
                    />
                    <button disabled={comment.length <= 0} className="button">
                        게시
                    </button>
                </form>
            </div>
        </div>
    )
}
export default FeedContainer;