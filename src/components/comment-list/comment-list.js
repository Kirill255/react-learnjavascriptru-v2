import React, { Component } from "react";
import CSSTransition from "react-addons-css-transition-group";
import Comment from "../comment";
import toggleOpen from "../../decorators/toggleOpen";
import "./style.css";

class CommentList extends Component {
  static defaultProps = {
    comments: []
  };

  get getBody() {
    const { comments, isOpen } = this.props;
    if (!isOpen) return null;

    const body = comments.length ? (
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    ) : (
      <h3>No comments yet</h3>
    );

    return <div>{body}</div>;
  }

  render() {
    const { isOpen, toggleOpen } = this.props;
    const text = isOpen ? "hide comments" : "show comments";
    return (
      <div>
        <button onClick={toggleOpen}>{text}</button>
        <CSSTransition
          transitionName="comments"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {this.getBody}
        </CSSTransition>
      </div>
    );
  }
}

export default toggleOpen(CommentList);
