import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { connect } from "react-redux";
import { changeSelection } from "../../actions";

class SelectFilter extends Component {
  static propTypes = {
    // from connect
    articles: PropTypes.array.isRequired,
    selected: PropTypes.array,
    changeSelection: PropTypes.func
  };

  get options() {
    return this.props.articles.map((article) => ({
      label: article.title,
      value: article.id
    }));
  }

  handleChange = (selected) => {
    this.props.changeSelection(selected);
  };

  render() {
    return (
      <Select
        options={this.options}
        value={this.props.selected}
        onChange={this.handleChange}
        isMulti
      />
    );
  }
}

export default connect(
  (state) => ({
    articles: state.articles,
    selected: state.filters.selected
  }),
  { changeSelection }
)(SelectFilter);
