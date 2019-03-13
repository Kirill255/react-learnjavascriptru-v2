import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { increment } from "../actions";

class Counter extends Component {
  static propTypes = {
    number: PropTypes.number,
    increment: PropTypes.func
  };

  render() {
    const { number, increment } = this.props;
    return (
      <div>
        <h3>{number}</h3>
        <button onClick={increment}>increment</button>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    number: state.counter
  }),
  { increment }
)(Counter);
