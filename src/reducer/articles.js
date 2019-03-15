import { Record } from "immutable";
import { DELETE_ARTICLE, ADD_COMMENT } from "../constants";
import { normalizedArticles } from "../fixtures";
import { arrToMap } from "../utils";

const ArticleRecord = Record({
  id: null,
  title: null,
  text: null,
  date: null,
  comments: []
});

export default (articlesState = arrToMap(normalizedArticles, ArticleRecord), action) => {
  const { type, payload, randomId } = action;

  switch (type) {
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
