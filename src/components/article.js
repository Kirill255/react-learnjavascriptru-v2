import React, { PureComponent } from "react";
import CommentList from "./comment-list";

class Article extends PureComponent {
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
      <section>
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
          <button onClick={this.handleClick}>{isOpen ? "close" : "open"}</button>
        </h3>
        {this.body}
      </div>
    );
  }
}

export default Article;
