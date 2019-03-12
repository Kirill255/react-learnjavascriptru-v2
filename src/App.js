import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import Select from "react-select";
import ArticleList from "./components/article-list";
import ArticlesChart from "./components/articles-chart";
import articles from "./fixtures";

class App extends Component {
  state = {
    openItem: null
  };

  get options() {
    return articles.map((article) => ({
      label: article.title,
      value: article.id
    }));
  }

  handleSelect = (openItem) => this.setState({ openItem });

  setArticleListRef = (ref) => {
    console.log(ref);
    console.log(findDOMNode(ref));

    setTimeout(() => {
      // ref.setState({ openItemId: articles[0].id }); // так лучше никогда не делать
      ref.toggleOpenItem(articles[0].id); // лучше так, то тоже лучше такое не использовать
    }, 3000);
  };

  render() {
    return (
      <div>
        <Select options={this.options} value={this.state.openItem} onChange={this.handleSelect} />
        <ArticleList ref={this.setArticleListRef} articles={articles} />
        <ArticlesChart articles={articles} />
      </div>
    );
  }
}

export default App;
