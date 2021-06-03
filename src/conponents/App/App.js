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
import NewPostContainer from "../NewPost/NewPostContainer";
import EditPostContainer from "../EditPost/EditPostContainer";

function App(props) {
  return (
    <BrowserRouter>
      <main>
        <Container>
          <TopNavbar/>

          <div className="content">
            <Route exact path="/" component={MyPostsContainer}/>
            <Route exact path="/posts" render={() => <Posts posts={props.state.posts} />}/>
            <Route exact path="/posts/new" component={NewPostContainer}/>
            <Route exact path="/posts/show/:id" component={PostContainer}/>
            <Route exact path="/posts/edit/:id" component={EditPostContainer}/>
            <Route exact path="/my-posts" component={MyPostsContainer}/>
          </div>
        </Container>
        <Footer/>
      </main>
    </BrowserRouter>
  )
}

export default App;