import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import history from "../history";
import counterReducer from "./counter";
import articles from "./articles";
import comments from "./comments";
import filters from "./filters";

export default combineReducers({
  router: connectRouter(history),
  counter: counterReducer,
  articles,
  comments,
  filters
});
