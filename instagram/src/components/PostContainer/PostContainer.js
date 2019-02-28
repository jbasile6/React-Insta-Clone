import React from 'react';
import Post from './Post';
import './PostContainer.css';

const PostsContainer = props => {
    console.log('PostContainer.js rendering')
    return (
        <div className="allposts-container">
            {props.posts.map( post => <Post key={post.likes} post={post} />)}
        </div>
    );
}


export default PostsContainer;