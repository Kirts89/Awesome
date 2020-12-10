import React from 'react';
import { Container } from "react-bootstrap";

import './App.sass';

import Footer from '../Footer/Footer'
import TopNavbar from '../TopNavbar/TopNavbar'
import Posts from '../Posts/Posts'

function App() {
  return (
    <Container>
      <TopNavbar/>
      <Posts/>

      <Footer/>
    </Container>
  )
}

export default App;