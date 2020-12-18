import React from "react";
import PostsItem from "../PostsItem/PostsItem";
import Posts from "../Posts/Posts";
import PostForm from "../PostForm/PostForm";

const MyPosts = (props) => {
  let posts = []

  return(
    <div>

      <PostForm posts={posts}/>
      <Posts posts={posts}/>
    </div>
  )
}

export default MyPosts