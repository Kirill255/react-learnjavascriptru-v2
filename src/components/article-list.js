import React, { Component } from "react";
import Article from "./article";
import accordion from "../decorators/accordion";

class ArticleList extends Component {
  get body() {
    const { articles, openItemId, toggleOpenItem } = this.props;
    return articles.map((article) => (
      <li key={article.id} className="article-list--item">
        <Article article={article} isOpen={openItemId === article.id} toggleOpen={toggleOpenItem} />
      </li>
    ));
  }

  render() {
    return <ul>{this.body}</ul>;
  }
}

export default accordion(ArticleList);
