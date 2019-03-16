import React, { Component } from "react";

class UserForm extends Component {
  handleUserChange = (event) => {
    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <div>
        Username:
        <input value={this.props.value} onChange={this.handleUserChange} />
      </div>
    );
  }
}

export default UserForm;
