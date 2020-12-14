import React from 'react';
import { Container } from "react-bootstrap";

import './App.sass';

import Footer from '../Footer/Footer'
import TopNavbar from '../TopNavbar/TopNavbar'
import Posts from '../Posts/Posts'

function App() {
  return (
    <main>
      <Container>
        <TopNavbar/>
        <div className="content">
          <Posts/>
        </div>
      </Container>
      <Footer/>
    </main>
  )
}

export default App;