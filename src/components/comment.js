import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

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

export default connect((state, ownProps) => ({
  comment: state.comments.find((comment) => comment.id === ownProps.id)
}))(Comment);

/*
из компонента CommentList в компонент Comment передаём id'шники и уже в самом компоненте Comment идём в стор и берём нужный комментарий
*/
