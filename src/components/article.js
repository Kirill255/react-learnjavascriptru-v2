import React, { PureComponent } from "react";

class Article extends PureComponent {
  handleBtnClick = () => this.props.toggleOpen(this.props.article.id);

  setTitleRef = (ref) => console.log(ref);

  render() {
    console.log("---", "rendering");
    const { article, isOpen } = this.props;
    return (
      <div>
        <div>
          <h3 ref={this.setTitleRef}>{article.title}</h3>
          <button onClick={this.handleBtnClick}>{isOpen ? "close" : "open"}</button>
        </div>
        {isOpen && <section>{article.text}</section>}
      </div>
    );
  }
}

export default Article;
