import React, { PureComponent } from "react";

class Article extends PureComponent {
  render() {
    console.log("---", "rendering");
    const { article, isOpen, toggleOpen } = this.props;
    return (
      <div>
        <div>
          <h3>{article.title}</h3>
          <button onClick={() => toggleOpen(article.id)}>{isOpen ? "close" : "open"}</button>
        </div>
        {isOpen && <section>{article.text}</section>}
      </div>
    );
  }
}

export default Article;
