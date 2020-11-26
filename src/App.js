import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = <b>Kirts</b>;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, {name}</h1>
        <img width="100px" src={logo}></img>
      </header>
    </div>
  );
}

export default App;
