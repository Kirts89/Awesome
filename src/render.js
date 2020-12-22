import React from 'react';
import ReactDOM from 'react-dom';
import './theme.sass'
import './index.sass';
import App from './conponents/App/App';


export let renderTree = (states) => {
  ReactDOM.render(
    <React.StrictMode>
      <App states={states}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
