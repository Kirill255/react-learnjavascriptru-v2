import { CHANGE_SELECTION, CHANGE_DATE_RANGE } from "../constants";

const defaultStateFilters = {
  selected: [],
  dataRange: {
    from: null,
    to: null
  }
};

export default (stateFilters = defaultStateFilters, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_SELECTION:
      return { ...stateFilters, selected: payload.selected };

    case CHANGE_DATE_RANGE:
      // return Object.assign({}, stateFilters, { dateRange: payload.dateRange })
      return { ...stateFilters, dataRange: payload.dataRange };

    default:
      return stateFilters;
  }
};
