import {
  INCREMENT,
  DELETE_ARTICLE,
  CHANGE_SELECTION,
  CHANGE_DATE_RANGE,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE,
  START,
  SUCCESS,
  FAIL,
  LOAD_ARTICLE_COMMENTS,
  LOAD_COMMENTS_FOR_PAGE
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

/*
export const loadArticleById = (id) => {
  return {
    type: LOAD_ARTICLE,
    payload: { id },
    callAPI: `/api/article/${id}`
  };
};
*/

export const loadArticleById = (id) => (dispatch) => {
  dispatch({
    type: LOAD_ARTICLE + START,
    payload: { id }
  });

  fetch(`/api/article/${id}`)
    .then((res) => res.json())
    .then((response) =>
      dispatch({
        type: LOAD_ARTICLE + SUCCESS,
        payload: { id },
        response
      })
    )
    .catch((error) =>
      dispatch({
        type: LOAD_ARTICLE + FAIL,
        payload: { id },
        error
      })
    );
};

export const loadArticleComments = (articleId) => {
  return {
    type: LOAD_ARTICLE_COMMENTS,
    payload: { articleId },
    callAPI: `/api/comment?article=${articleId}`
  };
};

export const checkAndLoadCommentsForPage = (page) => (dispatch, getState) => {
  const {
    comments: { pagination }
  } = getState();

  if (pagination.getIn([page, "loading"]) || pagination.getIn([page, "ids"])) return;

  dispatch({
    type: LOAD_COMMENTS_FOR_PAGE,
    payload: { page },
    callAPI: `/api/comment?limit=5&offset=${(page - 1) * 5}`
  });
};
