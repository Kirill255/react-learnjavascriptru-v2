import React, { Component } from "react";
import { Route } from "react-router-dom";
import ArticleList from "../article-list";
import Article from "../article/article";

export default class Articles extends Component {
  getArticle = ({ match }) => {
    console.log("---", "article match: ", match);
    if (!match) return <h1>Select an Article</h1>;

    return <Article id={match.params.id} isOpen key={match.params.id} />;
  };

  render() {
    console.log("---", "articles list match:", this.props.match);
    return (
      <div>
        <ArticleList />
        {/* <Route path="/articles/:id" render={this.getArticle} /> */}
        <Route path="/articles/:id" children={this.getArticle} exact />
      </div>
    );
  }
}
