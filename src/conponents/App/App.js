import React from 'react';
import { Container } from "react-bootstrap";
import {BrowserRouter, Route} from "react-router-dom";

import './App.sass';

import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import TopNavbar from '../TopNavbar/TopNavbar'
import Posts from '../Posts/Posts'
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import PostContainer from "../Post/PostContainer";

function App(props) {
  return (
    <BrowserRouter>
      <main>
        <Container>
          <TopNavbar/>

          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/posts" render={() => <Posts posts={props.state.posts} />}/>
            <Route path="/posts/:id" component={PostContainer}/>
            <Route path="/my-posts" component={MyPostsContainer}/>
          </div>
        </Container>
        <Footer/>
      </main>
    </BrowserRouter>
  )
}

export default App;