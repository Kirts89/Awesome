import React from 'react';
import logo from '../TopNavbar/logo.svg';
import './App.sass';
import TopNavbar from '../TopNavbar/TopNavbar.js'

function App() {

  return (
    <div>
      <TopNavbar/>

      <main role="main">
        Hello World
      </main>

      <footer className="container">
        <p>© Kirts 2020</p>
      </footer>
    </div>
  )
}

export default App;