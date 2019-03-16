import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Menu, { MenuItem } from "./components/menu/menu";
import Articles from "./components/routes/articles";
import Comments from "./components/routes/comments";
import UserForm from "./components/user-form";
import Filters from "./components/filters";
import Counter from "./components/counter";
import { Provider as UserProvider } from "./contexts/user";

class App extends Component {
  state = {
    username: ""
  };

  handleUserChange = (username) => this.setState({ username });

  render() {
    return (
      <div>
        <UserForm value={this.state.username} onChange={this.handleUserChange} />
        <UserProvider value={this.state.username}>
          <Menu>
            <MenuItem path="/" exact>
              Home
            </MenuItem>
            <MenuItem path="/counter">Counter</MenuItem>
            <MenuItem path="/filters">Filters</MenuItem>
            <MenuItem path="/articles">Articles</MenuItem>
            <MenuItem path="/comments">Comments</MenuItem>
          </Menu>

          <Switch>
            <Redirect from="/" to="/articles" exact />
            <Route path="/counter" component={Counter} exact />
            <Route path="/filters" component={Filters} />
            <Route path="/articles/new" render={() => <h1>New Article Page</h1>} />
            <Route path="/articles" component={Articles} />
            <Route path="/comments" component={Comments} />
            <Route path="/error" render={() => <h1>Error Page</h1>} />
            <Route path="*" render={() => <h1>Not Found Page</h1>} />
          </Switch>
        </UserProvider>
      </div>
    );
  }
}

export default App;
