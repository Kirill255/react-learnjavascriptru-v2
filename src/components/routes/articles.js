import React, { Component } from "react";
import { Route } from "react-router-dom";
import ArticleList from "../article-list";
import Article from "../article/article";

export default class Articles extends Component {
  getArticle = ({ match }) => {
    console.log("---", "article match: ", match);
    return <Article id={match.params.id} isOpen key={match.params.id} />;
  };

  render() {
    return (
      <div>
        <ArticleList />
        <Route path="/articles/:id" render={this.getArticle} />
      </div>
    );
  }
}
