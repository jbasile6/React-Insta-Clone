import React from 'react';
import './Comment.css';

const Comment = props => {
    return (
        <div className="each-comment-container">
            <p><strong>{props.comment.username}</strong></p>
            <p>{props.comment.text}</p>
        </div>
    )
}


export default Comment;