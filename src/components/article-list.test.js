import React from "react";
import { mount, render, shallow } from "enzyme";

import ArticleListWithAccordion, { ArticleList } from "./article-list";
import articles from "../fixtures";

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

  it("should close an article", (done) => {
    const wrapper = mount(<ArticleListWithAccordion articles={articles} />);
    expect(wrapper.find(".article--body").length).toEqual(0);

    wrapper
      .find(".article--btn")
      .at(0)
      .simulate("click");
    expect(wrapper.find(".article--body").length).toEqual(1);

    wrapper
      .find(".article--btn")
      .at(0)
      .simulate("click");

    setTimeout(() => {
      try {
        wrapper.simulate("transitionEnd");

        expect(wrapper.find(".article--body").length).toEqual(0);
        done();
      } catch (err) {
        done.fail(err);
      }
    }, 800);
  });
});

/*
shallow - поверхностный рендер тоесть только сам компонент без вложенностей
render - рендер компонентов вместе со всеми вложенными (виртуальное дерево вглубь)
mount - render + jsdom в котором можем эмулировать события, слушать их и т.д.
*/
