import React from "react";
import Enzyme, { render, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ArticleList from "./article-list";
import articles from "../fixtures";

Enzyme.configure({ adapter: new Adapter() });

describe("ArticleList test", () => {
  it("renders without crashing with render", () => {
    const div = document.createElement("div");
    render(<ArticleList articles={articles} />, div);
  });

  it("renders without crashing with shallow", () => {
    const div = document.createElement("div");
    shallow(<ArticleList />, div);
  });

  it("should contain articles", () => {
    const container = render(<ArticleList articles={articles} />);
    expect(container.find(".article-list--item").length).toEqual(articles.length);
  });
});
