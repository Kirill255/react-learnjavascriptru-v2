import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import Articles from "./components/routes/articles";
import Comments from "./components/routes/comments";
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
          <div>
            <NavLink to="/comments/1" activeStyle={{ color: "red" }}>
              Comments
            </NavLink>
          </div>
        </div>
        <Switch>
          <Route path="/counter" component={Counter} exact />
          <Route path="/filters" component={Filters} />
          <Route path="/articles/new" render={() => <h1>New Article Page</h1>} />
          <Route path="/articles" component={Articles} />
          <Route path="/comments" component={Comments} />
          <Route path="*" render={() => <h1>Not Found Page</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
