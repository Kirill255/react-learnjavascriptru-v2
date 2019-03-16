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
    console.log("---", "rendering article list");
    if (this.props.loading) return <Loader />;
    return <ul>{this.body}</ul>;
  }
}

export default connect(
  (state) => {
    return {
      articles: filtratedArticles(state),
      loading: articlesLoadingSelector(state),
      router: state.router
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

/*
connect под капотом использует shouldComponentUpdate() ну или PureComponent, чтобы отключить это поведение можно в connect 4'ым параметром передать {pure: false}

также shouldComponentUpdate() ну или PureComponent работает по принципу изменения пропсов, если пропсы не изменились, то компонент не будет перерендерен, сообственно ещё один способ, можно сказать "грязный хак", это передать в пропсы наш роутер, тоесть если изменися роутер, значит изменились пропсы, плюсы нам не нужно нужно в каждом компоненте выставлять {pure: false}, а вложенность может быть большой, минусы это требует подключения "connected-react-router", ведь мы читаем роутер из redux'а, а роутер появляется в redux именно из-за "connected-react-router"
*/
