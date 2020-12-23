import './theme.sass'
import './index.sass';
import * as serviceWorker from './serviceWorker';
import states, {subscribe} from "./states";
import ReactDOM from "react-dom";
import React from "react";
import App from "./conponents/App/App";
let  renderTree = (states) => {
  ReactDOM.render(
    <React.StrictMode>
      <App states={states}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

renderTree(states);
subscribe(renderTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
