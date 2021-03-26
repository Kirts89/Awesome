import React from "react";
import Posts from "../Posts/Posts";
import PostsItem from "../PostsItem/PostsItem";
import PostFormContainer from "../PostForm/PostFormContainer";
import Axios from "../../Axios";


const MyPosts = (props) => {

  Axios.get('posts').then((response) => {
    console.log(response)
    //props.setMyPosts(posts)
  })
  return(
    <div>
      <PostFormContainer/>
      <PostsItem post={props.posts.current}/>
      <Posts posts={props.posts}/>
    </div>
  )
}

export default MyPosts