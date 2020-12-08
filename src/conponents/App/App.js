import React from 'react';
import './App.sass';

import Advantages from '../Advantages/Advantages';
import Cards from '../Cards/Cards';
import CardsNav from '../CardsNav/CardsNav';
import Footer from '../Footer/Footer'
import TopNavbar from '../TopNavbar/TopNavbar'

function App() {
  return (
    <div className="container">
      <TopNavbar/>
      <Advantages/>
      <CardsNav/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App;