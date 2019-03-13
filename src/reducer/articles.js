import { DELETE_ARTICLE } from "../constants";
import articles from "../fixtures";
const defaultArticles = [...articles];

export default (articlesState = defaultArticles, action) => {
  const { type, payload } = action;

  switch (type) {
    case DELETE_ARTICLE:
      return articlesState.filter((article) => article.id !== payload.id);

    default:
      return articlesState;
  }
};
