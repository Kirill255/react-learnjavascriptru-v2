import {
  INCREMENT,
  DELETE_ARTICLE,
  CHANGE_SELECTION,
  CHANGE_DATE_RANGE,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES
} from "../constants";

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

export const addComment = (comment, articleId) => {
  return {
    type: ADD_COMMENT,
    payload: { comment, articleId },
    generateId: true
  };
};

export const loadAllArticles = () => {
  return {
    type: LOAD_ALL_ARTICLES,
    callAPI: "/api/article"
  };
};
