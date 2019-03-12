import React from "react";

const Article = ({ article, isOpen, toggleOpen }) => {
  return (
    <div>
      <div>
        <h3>{article.title}</h3>
        <button onClick={toggleOpen}>{isOpen ? "close" : "open"}</button>
      </div>
      {isOpen && <section>{article.text}</section>}
    </div>
  );
};

export default Article;
