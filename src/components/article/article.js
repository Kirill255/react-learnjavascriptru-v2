import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import CSSTransition from "react-addons-css-transition-group";
import CommentList from "../comment-list/comment-list";
import "./style.css";

class Article extends PureComponent {
  static propTypes = {
    article: PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func.isRequired
  };

  state = {
    hasError: false
  };

  componentDidCatch(err) {
    // отлавливает ошибки ниже по иерархии, тоесть ошибки которые случились в childrens, в нашем случае в CommentList, поэтому стоит перехватывать ошибки на самом верхнем уровне, в App
    // в dev режиме всё ровно будет отображаться overlay с ошибкой, но его можно закрыть, в prod режиме всё будет нормально, без overlay
    console.log("---", err);
    this.setState({
      hasError: true
    });
  }

  handleClick = () => this.props.toggleOpen(this.props.article.id);

  get body() {
    const { isOpen, article } = this.props;
    if (!isOpen) return null;
    if (this.state.hasError) return <div>Some Error in this article</div>;

    return (
      <section className="article--body">
        {article.text}
        <CommentList comments={article.comments} />
      </section>
    );
  }

  render() {
    const { article, isOpen } = this.props;
    return (
      <div>
        <h3>
          {article.title}
          <button className="article--btn" onClick={this.handleClick}>
            {isOpen ? "close" : "open"}
          </button>
        </h3>
        <CSSTransition
          transitionName="article"
          transitionAppear
          transitionEnterTimeout={500}
          transitionAppearTimeout={1000}
          transitionLeaveTimeout={300}
        >
          {this.body}
        </CSSTransition>
      </div>
    );
  }
}

export default Article;