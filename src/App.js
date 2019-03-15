import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import Articles from "./components/routes/articles";
import UserForm from "./components/user-form";
import Filters from "./components/filters";
import Counter from "./components/counter";

class App extends Component {
  render() {
    return (
      <div>
        <UserForm />
        <div>
          <div>
            <NavLink to="/" exact activeStyle={{ color: "red" }}>
              Home
            </NavLink>
          </div>
          <div>
            <NavLink to="/counter" activeStyle={{ color: "red" }}>
              Counter
            </NavLink>
          </div>
          <div>
            <NavLink to="/filters" activeStyle={{ color: "red" }}>
              Filters
            </NavLink>
          </div>
          <div>
            <NavLink to="/articles" activeStyle={{ color: "red" }}>
              Articles
            </NavLink>
          </div>
        </div>
        <Route path="/counter" component={Counter} />
        <Route path="/filters" component={Filters} />
        <Route path="/articles" component={Articles} />
      </div>
    );
  }
}

export default App;
