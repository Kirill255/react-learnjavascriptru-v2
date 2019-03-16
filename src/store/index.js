import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import history from "../history";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "../reducer";
// import logger from "../middlewares/logger";
import randomId from "../middlewares/randomId";
import api from "../middlewares/api";

// https://github.com/reduxjs/redux-devtools-extension#12-advanced-store-setup
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, routerMiddleware(history), randomId, api /*, logger */)
  // other store enhancers if any
);

const store = createStore(reducer, enhancer);
// https://github.com/reduxjs/redux/pull/2128#issuecomment-263581319
// как я понял(возможно не верно!), по идее createStore принимает 3 аргумента, и enhancer идёт третьим `const store = createStore(reducer, {}, enhancer);`, но если вы называете enhancer именно `enhancer` (ведь это просто название переменной, мы можем назвать её как угодно или вообще записать без переменной), то мы можем опустить второй параметр вообще `const store = createStore(reducer, enhancer);`
// https://github.com/reduxjs/redux/pull/2128#issuecomment-263490664 или вот ещё нашёл, дело не в названии enhancer, под капотом createStore проверяет параметры и второй параметр должен быть по идее объектом, а третий функцией `const store = createStore(reducer, {}, enhancer);`, и есть условие что если второй параметр не объект, а функция и третий параметр отсутствует, то это как бы и есть наш enhancer, там что-то связанно со старой версией библиотеки redux, чтобы не ломать совместимость, используется два варианта и так и так

//dev only!!!
window.store = store;

// browser console:
// store.getState()
// store.dispatch({type: "INCREMENT"})

export default store;
