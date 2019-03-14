import { createStore, applyMiddleware } from "redux";
import reducer from "../reducer";
import logger from "../middlewares/logger";

const enhancer = applyMiddleware(logger);
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
