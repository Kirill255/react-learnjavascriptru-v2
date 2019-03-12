//decorator === HOC === Higher Order Component
import React, { Component as ReactComponent } from "react";

export default (OriginalComponent) =>
  class DecoratedComponent extends ReactComponent {
    state = {
      openItemId: null
    };

    toggleOpenItem = (openItemId) => this.setState({ openItemId });

    render() {
      return (
        <OriginalComponent {...this.props} {...this.state} toggleOpenItem={this.toggleOpenItem} />
      );
    }
  };
