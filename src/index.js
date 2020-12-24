import ReactDOM from "react-dom";
import React from "react";

import './theme.sass'
import './index.sass';

import * as serviceWorker from './serviceWorker';
import App from "./conponents/App/App";
import store from "./store";

const renderTree = (store) => {
  ReactDOM.render(
    <React.StrictMode>
      <App store={store}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

renderTree(store);
store.subscribe(renderTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
