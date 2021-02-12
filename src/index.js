import ReactDOM from "react-dom";
import React from "react";

import './theme.sass'
import './index.sass';

import * as serviceWorker from './serviceWorker';
import App from "./conponents/App/App";
import store from "./redux/store";

const renderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

renderTree(store.getState());
store.subscribe(() => {
  renderTree(store.getState())
});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
