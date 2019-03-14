import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createCommentSelector } from "../selectors";

const Comment = ({ comment }) => {
  return (
    <div>
      {comment.text} <b>by {comment.user}</b>
    </div>
  );
};

Comment.propTypes = {
  id: PropTypes.string,
  // from connect
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
  }).isRequired
};

// https://react-redux.js.org/api/connect#returns
// https://react-redux.js.org/api/connect#factory-functions
const createMapStateToProps = () => {
  const commentSelector = createCommentSelector();

  return (state, ownProps) => ({
    comment: commentSelector(state, ownProps)
  });
};

export default connect(createMapStateToProps)(Comment);

// или так
// export default connect(() => {
//   const commentSelector = createCommentSelector();

//   return (state, ownProps) => ({
//     comment: commentSelector(state, ownProps)
//   });
// })(Comment);

/*
из компонента CommentList в компонент Comment передаём id'шники и уже в самом компоненте Comment идём в стор и берём нужный комментарий
*/
