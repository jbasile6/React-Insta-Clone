import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
    return (
        <div className="eachPost-container">
            <div className="post-header">
                <div className="post-thumbnail">
                    <img className="thumbnail-header" src={props.post.thumbnailUrl}  alt="Thumbail Image" />
                </div>
                <p><strong>{props.post.username}</strong></p>
            </div>

            <div className="post-image-container">
            <img className="post-image" src={props.post.imageUrl} alt="Post Image" />
            </div>

            <div className="comment-section">
                <CommentSection comments={props.post.comments} />
            </div>


        </div>
    )
}




export default Post;