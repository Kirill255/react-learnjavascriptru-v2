import React, { Component } from "react";
import MenuItem from "./menu-item";

class Menu extends Component {
  render() {
    return (
      <div>
        <h3>Main Menu</h3>
        {this.props.children}
      </div>
    );
  }
}

export { MenuItem };
export default Menu;

/*
такой экспорт просто для удобства импорта в app, всё из одно файла подключается
import Menu, { MenuItem } from "./components/menu/menu";
// вместо
import Menu from "./components/menu/menu";
import MenuItem from "./components/menu/menu-item";
*/
