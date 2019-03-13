import React, { Component } from "react";
import CSSTransition from "react-addons-css-transition-group";
import Comment from "../comment";
import toggleOpen from "../../decorators/toggleOpen";
import "./style.css";

class CommentList extends Component {
  // static defaultProps = {
  //   comments: []
  // };

  get getBody() {
    const { comments = [], isOpen } = this.props;
    if (!isOpen) return null;

    return (
      <div className="comment-list--body">
        {comments.length ? this.comments : <h3 className="comment-list--empty">No comments yet</h3>}
      </div>
    );
  }

  get comments() {
    return (
      <ul>
        {this.props.comments.map((comment) => (
          <li key={comment.id} className="comment-list--item">
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { isOpen, toggleOpen } = this.props;
    const text = isOpen ? "hide comments" : "show comments";
    return (
      <div>
        <button onClick={toggleOpen} className="comment-list--btn">
          {text}
        </button>
        <CSSTransition
          transitionName="comments"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.getBody}
        </CSSTransition>
      </div>
    );
  }
}

export default toggleOpen(CommentList);
