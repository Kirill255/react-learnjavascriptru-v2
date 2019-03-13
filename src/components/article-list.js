import React, { Component } from "react";
import PropTypes from "prop-types";
import Article from "./article/article";
import accordion from "../decorators/accordion";

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
    const { articles, openItemId, toggleOpenItem } = this.props;
    return articles.map((article) => (
      <li key={article.id} className="article-list--item">
        <Article article={article} isOpen={openItemId === article.id} toggleOpen={toggleOpenItem} />
      </li>
    ));
  }

  render() {
    return <ul>{this.body}</ul>;
  }
}

export default accordion(ArticleList);

/*
Для тестирования сделали возможность экспортировать класс отдельно и весь компонент завёрнутый в декоратор:

export class ArticleList() - экспортируем сам класс
import {ArticleList} from "./article-list"

export default accordion(ArticleList) - экспортируем класс завёрнутый в декоратор
import ArticleList from "./article-list" // сдесь имя сами придумываем, поэтому если импортируем в один файл, чтобы небыло конфликта можем назвать например ArticleListWithAccordion
*/
