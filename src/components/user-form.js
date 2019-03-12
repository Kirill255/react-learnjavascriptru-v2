import React, { Component } from "react";

class UserForm extends Component {
  state = {
    username: ""
  };

  handleUserChange = (event) => {
    // if (event.target.value.length > 10) return;
    if (event.target.value.length > 10) return this.setState({ username: "" }); // шутка

    this.setState({
      username: event.target.value
    });
  };

  render() {
    return (
      <div>
        Username:
        <input value={this.state.username} onChange={this.handleUserChange} />
      </div>
    );
  }
}

export default UserForm;
