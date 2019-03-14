import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../actions";
import "./style.css";

const limits = {
  user: {
    min: 10,
    max: 50
  },
  text: {
    min: 10,
    max: 50
  }
};

export class CommentForm extends Component {
  static propTypes = {
    articleId: PropTypes.string,
    // from connect
    addComment: PropTypes.func
  };

  state = {
    user: "",
    text: ""
  };

  handleChange = (type) => (event) => {
    const { value } = event.target;
    if (value.length > limits[type].max) return;
    this.setState({ [type]: value });
  };

  isValidForm = () => ["user", "text"].every(this.isValidField);

  isValidField = (type) => this.state[type].length >= limits[type].min;

  getClassName = (type) => (this.isValidField(type) ? "" : "form-input__error");

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.addComment(this.state);

    this.setState({
      user: "",
      text: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="user">User</label>
            <input
              id="user"
              type="text"
              placeholder="user"
              value={this.state.user}
              className={this.getClassName("user")}
              onChange={this.handleChange("user")}
            />
          </div>
          <div>
            <label htmlFor="text">Text</label>
            <input
              id="text"
              type="text"
              placeholder="text"
              value={this.state.text}
              className={this.getClassName("text")}
              onChange={this.handleChange("text")}
            />
          </div>
          <input type="submit" value="submit" disabled={!this.isValidForm()} />
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  (dispatch, ownProps) => ({
    addComment: (comment) => dispatch(addComment(comment, ownProps.articleId))
  })
)(CommentForm);
