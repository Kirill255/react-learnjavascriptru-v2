import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MenuItem extends Component {
  render() {
    const { children, path, ...rest } = this.props;
    return (
      <div>
        <NavLink to={path} activeStyle={{ color: "red" }} {...rest}>
          {children}
        </NavLink>
      </div>
    );
  }
}

export default MenuItem;

/*
в ...rest у меня все оставшиеся пропсы, а именно я передаю там ещё exact и всё, не знаю  насколько верный вариант, но я не нашёл другого способа передать exact если он существует

update: нашёл ещё вариант, но первый лучше вроде:
<MenuItem path="/" exact={true}>
// ...
const { children, path, exact } = this.props;
<NavLink to={path} activeStyle={{ color: "red" }} exact={exact}>
  {children}
</NavLink>
*/
