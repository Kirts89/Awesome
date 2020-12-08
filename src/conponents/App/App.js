import React from 'react';
import './App.sass';
import Advantages from "../Advantages/Advantages";
import ButtonGroup1 from "../ButtonProduct/ButtonGroup";
import Cards from "../Cards/Cards";
import Footer from '../Footer/Footer.js'
import TopNavbar from '../TopNavbar/TopNavbar.js'

function App() {
  return (
    <div className="container">
      <TopNavbar/>
      <Advantages/>
      <h2>Продукция</h2>
      <hr/>
     <ButtonGroup1/>
     <Cards/>

      <Footer/>
    </div>
  )
}

export default App;