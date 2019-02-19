import React from 'react';

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
            <div className="comment-container">
            
            </div>
        )
    }
}





export default CommentSection;