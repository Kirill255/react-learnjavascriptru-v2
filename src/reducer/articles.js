import { DELETE_ARTICLE, ADD_COMMENT } from "../constants";
import { normalizedArticles } from "../fixtures";
import { arrToMap } from "../utils";

export default (articlesState = arrToMap(normalizedArticles), action) => {
  const { type, payload, randomId } = action;

  switch (type) {
    case DELETE_ARTICLE:
      const articlesCopy = { ...articlesState };
      delete articlesCopy[payload.id];
      return articlesCopy;

    case ADD_COMMENT:
      const article = articlesState[payload.articleId];

      return {
        ...articlesState,
        [payload.articleId]: {
          ...article,
          comments: (article.comments || []).concat(randomId)
        }
      };

    default:
      return articlesState;
  }
};
