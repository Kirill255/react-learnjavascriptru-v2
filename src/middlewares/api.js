import { FAIL, START, SUCCESS } from "../constants";

export default (store) => (next) => (action) => {
  const { callAPI, type, ...rest } = action;
  if (!callAPI) return next(action);

  next({ type: type + START, ...rest });

  fetch(callAPI)
    .then((response) => response.json())
    .then((response) => next({ type: type + SUCCESS, response, ...rest }))
    .catch((error) => next({ type: type + FAIL, error, ...rest }));
};

/*
У нас эта мидлара срабатывает когда action содержит поле callAPI, а это только один action loadAllArticles у которого type: LOAD_ALL_ARTICLES, когда этот action вызывается мы получаем его в мидлваре, после мы делаем запрос на сервер(начинаем делать), мы меняем у action'а type и передаём дальше вместе со всеми остальными парамтрами(просто прокидываем всё дальше, только тип меняем), next({ type: type + START, ...rest });, тоесть тип был LOAD_ALL_ARTICLES, а стал LOAD_ALL_ARTICLES_START, когда ответ приходит мы опять меняем тип, но на LOAD_ALL_ARTICLES_SUCCESS, и также прокидываем всё дальше, только ещё ответ(response) добавляем, с catch тоже самое, если ошибка, тогда type станет LOAD_ALL_ARTICLES_FAIL и прокидываем всё + ошибку,
// p.s: мы меняем типы чтобы можно было как-то различать/обработать это в reducer, подписаться на разные этапы запроса и например повесить лоадер
// p.s: когда мы получим ответ и вызовем next, то упустим те action'ы что происходило пока шёл запрос, если мы хотим снова как-то реагировать на них после того как пришёл ответ, то мы можем запустить вместо next({ type: type + START, ...rest }); вот так store.dispatch({ type: type + START, ...rest });, но тогда вся ветка action'ов запустится заново
*/
