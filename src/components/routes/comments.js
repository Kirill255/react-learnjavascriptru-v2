import React from "react";
import { Route, Redirect } from "react-router-dom";
import CommentsPagination from "../comments-pagination";

// component
const CommentsPage = ({ match }) => {
  return match.isExact ? (
    <Redirect to="/comments/1" />
  ) : (
    <Route path="/comments/:page" render={getCommentsPaginator} />
  );
};

// handler component
const getCommentsPaginator = ({ match }) => {
  return <CommentsPagination page={match.params.page} />;
};

export default CommentsPage;
