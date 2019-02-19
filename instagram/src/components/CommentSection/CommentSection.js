import React from 'react';
import Comment from './Comment';

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





export default CommentSection;