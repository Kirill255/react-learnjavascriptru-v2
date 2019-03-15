import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadArticleComments } from "../../actions";
import CSSTransition from "react-addons-css-transition-group";
import Comment from "../comment";
import Loader from "../loader";
import CommentForm from "../comment-form/comment-form";
import toggleOpen from "../../decorators/toggleOpen";
import "./style.css";

class CommentList extends Component {
  static propTypes = {
    article: PropTypes.object,
    //from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  };

  // static defaultProps = {
  //   comments: []
  // };

  componentDidUpdate(oldProps) {
    const { isOpen, article, loadArticleComments } = this.props;
    if (isOpen && !oldProps.isOpen && !article.commentsLoading && !article.commentsLoaded) {
      loadArticleComments(article.id);
    }
  }

  get getBody() {
    const {
      article: { id, comments, commentsLoading, commentsLoaded },
      isOpen
    } = this.props;
    if (!isOpen) return null;
    if (commentsLoading) return <Loader />;
    if (!commentsLoaded) return null;

    return (
      <div className="comment-list--body">
        {comments.length ? this.comments : <h3 className="comment-list--empty">No comments yet</h3>}
        <CommentForm articleId={id} />
      </div>
    );
  }

  get comments() {
    return (
      <ul>
        {this.props.article.comments.map((id) => (
          <li key={id} className="comment-list--item">
            <Comment id={id} />
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

export default connect(
  null,
  { loadArticleComments }
)(toggleOpen(CommentList));

/*
props comments который приходит из connect, он имеет больший приоритет, чем собстенный props компонента, поэтому у нас нет конфликта имён(они как бы перезатираются), мы в connect обращаемся к comments самого компонента, это массив id'шников который приходит из article.js, дальше на основе этого массива высчитываем все комментарии и записываем в свойство comments, теперь в компоненте в this.props.comments приходит массив с комментриями из connect
ps: по идее нужно переименовать чтобы было очевидно, что и откуда например:
export default connect((state, ownProps) => ({
  commentsFromConnect: ownProps.comments.map((id) => state.comments.find((comment) => comment.id === id))
}))(toggleOpen(CommentList));
и обращаться в компоненте как this.props.commentsFromConnect,
*/

/*
https://habr.com/ru/company/ruvds/blog/423157/
https://habr.com/ru/post/314582/
http://enthudrives.com/blog/connect-with-mergeprops/
*/

/*
ещё есть 3 аргумент mergeProps, в первом варианте происходило примерно тоже самое только не очевидно, если 3 аргумент не задан то используется её стандартная реализация:
const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, stateProps, dispatchProps)
}
тоесть наши props comments из компонента и props comments из connect просто мёржатся в новый объект
*/

/*
export default connect(
  (state) => ({
    comments: state.comments
  }),
  null,
  (propsFromState, propsFromDispatch, ownProps) => ({
    comments: (ownProps.comments || []).map((id) =>
      propsFromState.comments.find((comment) => comment.id === id)
    )
  })
)(toggleOpen(CommentList));
*/
