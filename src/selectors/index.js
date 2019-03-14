import { createSelector } from "reselect";

export const articlesSelector = (state) => state.articles;
export const dataRangeSelector = (state) => state.filters.dataRange;
export const selectedSelector = (state) => state.filters.selected;

export const filtratedArticles = createSelector(
  articlesSelector,
  selectedSelector,
  dataRangeSelector,
  (articles, selected, dataRange) => {
    const { from, to } = dataRange;

    console.log("---", "article list selector");

    return articles.filter((article) => {
      const published = Date.parse(article.date);
      return (
        (!selected.length || selected.find((selected) => selected.value === article.id)) &&
        (!from || !to || (published > from && published < to))
      );
    });
  }
);

export const commentsSelector = (state) => state.comments;
export const idSelector = (_, props) => props.id;

export const createCommentSelector = () =>
  createSelector(
    commentsSelector,
    idSelector,
    (comments, id) => {
      console.log("---", "comment selector", id);

      return comments.find((comment) => comment.id === id);
    }
  );
