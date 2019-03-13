import { createStore } from "redux";
import reducer from "../reducer";

const store = createStore(reducer);

//dev only!!!
window.store = store;

// browser console:
// store.getState()
// store.dispatch({type: "INCREMENT"})

export default store;
