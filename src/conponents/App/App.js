import React from 'react';
import { Container } from "react-bootstrap";

import './App.sass';

import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import TopNavbar from '../TopNavbar/TopNavbar'
import Posts from '../Posts/Posts'
import {BrowserRouter, Route} from "react-router-dom";
import MyPosts from "../MyPosts/MyPosts";

function App(props) {
  return (
    <BrowserRouter>
      <main>
        <Container>
          <TopNavbar/>

          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/posts" render={() => <Posts posts={props.state.posts} />}/>
            <Route path="/my-posts" render={() => <MyPosts posts={props.state.myPosts} />}/>
          </div>
        </Container>
        <Footer/>
      </main>
    </BrowserRouter>
  )
}

export default App;