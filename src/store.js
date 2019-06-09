// send to App.js
import { createStore, applyMiddleware } from "redux";

const store = createStore(() => [], {}, applyMiddleware());

export default store;
