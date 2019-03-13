import React from "react";
import Enzyme, { mount, render, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ArticleListWithAccordion, { ArticleList } from "./article-list";
import articles from "../fixtures";

Enzyme.configure({ adapter: new Adapter() });

describe("ArticleList test", () => {
  it("should contain articles", () => {
    const container = shallow(<ArticleList articles={articles} toggleOpenItem={() => {}} />);

    expect(container.find(".article-list--item").length).toEqual(articles.length);
  });

  it("should render closed articles by default", () => {
    const container = render(<ArticleListWithAccordion articles={articles} />);

    expect(container.find(".article--body").length).toEqual(0);
  });

  it("should open an article on click", () => {
    const container = mount(<ArticleListWithAccordion articles={articles} />);

    container
      .find(".article--btn")
      .at(0)
      .simulate("click");

    expect(container.find(".article--body").length).toEqual(1);
  });

  it("should trigger data fetching on mount", (done) => {
    mount(<ArticleListWithAccordion articles={[]} toggleOpenItem={() => {}} fetchData={done} />);
  });
});

/*
shallow - поверхностный рендер тоесть только сам компонент без вложенностей
render - рендер компонентов вместе со всеми вложенными (виртуальное дерево вглубь)
mount - render + jsdom в котором можем эмулировать события, слушать их и т.д.
*/
