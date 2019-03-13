import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import CommentList from "./comment-list";
import articles from "../../fixtures";
const { comments } = articles[0];

Enzyme.configure({ adapter: new Adapter() });

describe("CommentList test", () => {
  it("should be closed by default", () => {
    const wrapper = mount(<CommentList comments={comments} />);

    expect(wrapper.find(".comment-list--body").length).toBe(0);
  });

  it("should open on click", () => {
    const wrapper = mount(<CommentList comments={comments} />);

    wrapper
      .find(".comment-list--btn")
      .at(0)
      .simulate("click");

    expect(wrapper.find(".comment-list--item").length).toBe(comments.length);
  });

  it("should display an empty text", () => {
    const wrapper = mount(<CommentList />);

    wrapper
      .find(".comment-list--btn")
      .at(0)
      .simulate("click");

    expect(wrapper.find(".comment-list--empty").length).toBe(1);
  });
});
