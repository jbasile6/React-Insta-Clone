import React from 'react';
import Comment from './Comment';
import './CommentSection.css';

import PropTypes from 'prop-types';

//Need to store comments array in state, must use class constructor(i think lol)

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            likes: props.likes,
            liked: false,
            className: props.className
        };
    }

    addNewComment = e => {
        //instructions said you had to use index as an input
        //no idea how to do this using index, we never went over examples similar to this and I couldn't find any
        e.preventDefault();
        const existingComments = [...this.state.comments];
        //console.log(existingComments);
        const newComment = {
            username: 'jamesbasile',
            text: this.state.value
        }

        existingComments.push(newComment);
        this.setState({
            comments: existingComments,
            value: ''
        });
    }

    commentAdded = e => {
        this.setState({
            value: e.target.value
        });
    }

    handleLike = () => {

        if (!this.state.liked) {
        this.setState(prevState => ({
            likes: prevState.likes += 1,
            liked: true,
            className: 'fa fa-heart liked'
        }));
    }  else {
        this.setState(prevState => ({
            likes: prevState.likes -= 1,
            liked: false,
            className: 'fa fa-heart'
        }))
    }
}


    componentDidUpdate() {
        console.log('new comment!');
    }


    render() {
        return (
            <div className="comment-section-container">
                <div className="like-comment-icons">
                    <i className='fa fa-heart' onClick={this.handleLike} />
                    <i className="fas fa-comment"></i>
                </div>

                <div className="likes"><p><strong>{this.state.likes}</strong> Likes</p></div>
                <div className="comment-container">

                    {this.state.comments.map((comment, index) => <Comment key={index} comment={comment} />)}
                </div>

                <div className="add-comment-container">
                    <form onSubmit={this.addNewComment}>
                        <input value={this.state.value} onChange={this.commentAdded} type="text" placeholder="Add a comment..." />
                    </form>
                </div>

            </div>

        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            username: PropTypes.string
        })
    )
}





export default CommentSection;