import React from "react";
import Posts from "../Posts/Posts";
import PostsItem from "../PostsItem/PostsItem";
import PostFormContainer from "../PostForm/PostFormContainer";
import axios from "../../axios";


const MyPosts = (props) => {
  if (!props.posts.loaded) {
    axios.get('posts').then((response) => {
      console.log(response)
      props.setMyPosts(response.data)
    })
  }

  return(
    <div>
      <PostFormContainer/>
      <PostsItem post={props.posts.current}/>
      <Posts posts={props.posts}/>
    </div>
  )
}

export default MyPosts