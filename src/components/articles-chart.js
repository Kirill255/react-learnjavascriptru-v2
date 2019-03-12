import React, { Component } from "react";
//import d3 from 'd3'

class ArticlesChart extends Component {
  componentDidUpdate(oldProps) {
    //compare oldProps with this.props
    //update chart inside this.containerRef
  }

  componentWillUnmount() {
    //remove all d3 junk
  }

  setContainerRef = (ref) => {
    if (ref) {
      this.containerRef = ref;
      ///do some d3 charting inside ref
    } else {
      //do some cleanup
    }
  };

  render() {
    return <div ref={this.setContainerRef} />;
  }
}

export default ArticlesChart;
