import React from "react";

const Comment = ({ comment }) => {
  return (
    <div>
      {comment.text} <b>by {comment.user}</b>
    </div>
  );
};

export default Comment;
