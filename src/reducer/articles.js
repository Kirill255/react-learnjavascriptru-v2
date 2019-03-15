import { Record } from "immutable";
import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES } from "../constants";
import { arrToMap } from "../utils";

const ArticleRecord = Record({
  id: null,
  title: null,
  text: null,
  date: null,
  comments: []
});

export default (articlesState = arrToMap([], ArticleRecord), action) => {
  const { type, payload, randomId, response } = action;

  switch (type) {
    case LOAD_ALL_ARTICLES:
      return arrToMap(response, ArticleRecord);

    case DELETE_ARTICLE:
      return articlesState.delete(payload.id);

    case ADD_COMMENT:
      return articlesState.updateIn([payload.articleId, "comments"], (comments) =>
        comments.concat(randomId)
      );

    default:
      return articlesState;
  }
};
