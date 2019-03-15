import React from "react";
import { Route } from "react-router-dom";
import CommentsPagination from "../comments-pagination";

// component
const CommentsPage = () => {
  return <Route path="/comments/:page" render={getCommentsPaginator} />;
};

// handler component
const getCommentsPaginator = ({ match }) => {
  return <CommentsPagination page={match.params.page} />;
};

export default CommentsPage;
