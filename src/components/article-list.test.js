import React from "react";
import ReactDOM from "react-dom";
import ArticleList from "./article-list";
import articles from "../fixtures";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ArticleList articles={articles} />, div);
});
