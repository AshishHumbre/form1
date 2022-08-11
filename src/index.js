import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
//import { Values } from "redux-form-website-template";

import store from "./app/store";

const dest = document.getElementById("root");

let render = () => {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

  renderMethod(
    <Provider store={store}>
      <App />
    </Provider>,
    dest
  );
};

render();
