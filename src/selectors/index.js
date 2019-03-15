import { createSelector } from "reselect";

// export const articlesSelector = (state) => state.articles;
export const articlesMapSelector = (state) => state.articles.entities;
export const articlesLoadingSelector = (state) => state.articles.loading;
export const dataRangeSelector = (state) => state.filters.dataRange;
export const selectedSelector = (state) => state.filters.selected;

export const articlesListSelector = createSelector(
  articlesMapSelector,
  (articlesMap) => articlesMap.valueSeq().toArray()
);

export const filtratedArticles = createSelector(
  articlesListSelector,
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

export const commentsSelector = (state) => state.comments.entities;
export const idSelector = (_, props) => props.id;

export const createCommentSelector = () =>
  createSelector(
    commentsSelector,
    idSelector,
    (comments, id) => {
      console.log("---", "comment selector", id);

      return comments.get(id);
    }
  );

export const articleSelector = createSelector(
  articlesMapSelector,
  idSelector,
  (articles, id) => articles.get(id)
);

export const totalCommentsSelector = (state) => state.comments.total;
export const commentsPagenationSelector = (state) => state.comments.pagination;
export const pageSelector = (_, props) => props.page;

export const commentsPageIdsSelector = createSelector(
  commentsPagenationSelector,
  pageSelector,
  (pagination, page) => pagination.getIn([page, "ids"])
);

export const commentsPageLoadingSelector = createSelector(
  commentsPagenationSelector,
  pageSelector,
  (pagination, page) => pagination.getIn([page, "loading"])
);
