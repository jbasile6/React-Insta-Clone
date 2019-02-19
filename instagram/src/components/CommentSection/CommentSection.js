import React from 'react';
import Comment from './Comment';
import './CommentSection.css';

import PropTypes from 'prop-types';

//Need to store comments array in state, must use class constructor(i think lol)

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        };
    }
    render() {
        return (
            <div className="comment-section-container">
                <div className="comment-container">
                    {this.state.comments.map((comment, index) => <Comment key={index} comment={comment} />)}
                </div>

                <div className="add-comment-container">
                    <form>
                        <input type="text" placeholder="Add a comment..." />
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