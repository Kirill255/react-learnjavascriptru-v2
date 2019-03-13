import React, { Component } from "react";
import PropTypes from "prop-types";
import DayPicker, { DateUtils } from "react-day-picker";
import { connect } from "react-redux";
import { changeDateRange } from "../../actions";

import "react-day-picker/lib/style.css";
import "./date-range.css";

class DateRange extends Component {
  static propTypes = {
    // from connect
    dataRange: PropTypes.object,
    changeDateRange: PropTypes.func
  };

  handleDayClick = (day) => {
    const { dataRange, changeDateRange } = this.props;
    changeDateRange(DateUtils.addDayToRange(day, dataRange));
  };

  render() {
    const { from, to } = this.props.dataRange;
    const modifiers = { start: from, end: to };
    const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`;
    return (
      <div className="date-range">
        <DayPicker
          className="Selectable"
          modifiers={modifiers}
          selectedDays={(day) => DateUtils.isDayInRange(day, { from, to })}
          onDayClick={this.handleDayClick}
        />
        {selectedRange}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    dataRange: state.filters.dataRange
  }),
  { changeDateRange }
)(DateRange);
