import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Comment from "./comment";
import Loader from "./loader";
import { checkAndLoadCommentsForPage } from "../actions";
import {
  commentsPageLoadingSelector,
  commentsPageIdsSelector,
  totalCommentsSelector
} from "../selectors";

class CommentsPagination extends Component {
  componentDidMount() {
    this.props.checkAndLoadCommentsForPage(this.props.page);
  }

  componentDidUpdate() {
    const { page, checkAndLoadCommentsForPage } = this.props;
    checkAndLoadCommentsForPage(page);
  }

  getCommentItems() {
    const { comments, loading } = this.props;
    if (loading || !comments) return <Loader />;

    const commentItems = comments.map((id) => (
      <li key={id}>
        <Comment id={id} />
      </li>
    ));
    return <ul>{commentItems}</ul>;
  }

  getPaginator() {
    const { total } = this.props;
    const items = new Array(Math.floor((total - 1) / 5) + 1).fill().map((_, i) => (
      <li key={i}>
        <NavLink to={`/comments/${i + 1}`} activeStyle={{ color: "red" }}>
          {i + 1}
        </NavLink>
      </li>
    ));
    return <ul>{items}</ul>;
  }

  render() {
    const { total } = this.props;
    if (!total) return <Loader />;

    return (
      <div>
        {this.getCommentItems()}
        {this.getPaginator()}
      </div>
    );
  }
}

export default connect(
  (state, props) => ({
    total: totalCommentsSelector(state),
    loading: commentsPageLoadingSelector(state, props),
    comments: commentsPageIdsSelector(state, props)
  }),
  { checkAndLoadCommentsForPage }
)(CommentsPagination);
