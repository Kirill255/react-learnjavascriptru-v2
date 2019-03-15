import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { filtratedArticles, articlesLoadingSelector } from "../selectors";
import Loader from "./loader";
import { loadAllArticles } from "../actions";

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    fetchData: PropTypes.func,
    //from accordion decorator
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func
  };

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData && fetchData();
  }

  get body() {
    const { articles } = this.props;
    return articles.map((article) => (
      <li key={article.id} className="article-list--item">
        <NavLink to={`/articles/${article.id}`} activeStyle={{ color: "red" }}>
          {article.title}
        </NavLink>
      </li>
    ));
  }

  render() {
    if (this.props.loading) return <Loader />;
    return <ul>{this.body}</ul>;
  }
}

export default connect(
  (state) => {
    return {
      articles: filtratedArticles(state),
      loading: articlesLoadingSelector(state)
    };
  },
  { fetchData: loadAllArticles }
)(ArticleList);

/*
Для тестирования сделали возможность экспортировать класс отдельно и весь компонент завёрнутый в декоратор:

export class ArticleList() - экспортируем сам класс
import {ArticleList} from "./article-list"

export default accordion(ArticleList) - экспортируем класс завёрнутый в декоратор
import ArticleList from "./article-list" // сдесь имя сами придумываем, поэтому если импортируем в один файл, чтобы небыло конфликта можем назвать например ArticleListWithAccordion
*/
