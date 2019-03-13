import { INCREMENT, DELETE_ARTICLE, CHANGE_SELECTION, CHANGE_DATE_RANGE } from "../constants";

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const deleteArticle = (id) => {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  };
};

export const changeSelection = (selected) => {
  return {
    type: CHANGE_SELECTION,
    payload: { selected }
  };
};

export const changeDateRange = (dataRange) => {
  return {
    type: CHANGE_DATE_RANGE,
    payload: { dataRange }
  };
};
