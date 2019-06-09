import React from "react";
import logo from "./logo.svg";
import { Provider } from "react-redux";
//import { createStore, applyMiddleware } from "redux"; ---this move to store(src)

import Postform from "./components/Postform";
import "./App.css";
import Posts from "./components/Posts";
import store from "./store";

// const store = createStore(() => [], {}, applyMiddleware());  ---this move to store(src)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Postform />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
