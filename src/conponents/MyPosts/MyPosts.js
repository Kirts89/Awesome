import React from "react";
import Posts from "../Posts/Posts";
import PostsItem from "../PostsItem/PostsItem";
import PostFormContainer from "../PostForm/PostFormContainer";

function MyPosts(props)  {
  return(
    <div>
      <PostFormContainer/>
      <PostsItem post={props.posts.current}/>
      <Posts posts={props.posts}/>
    </div>
  )
}


export default MyPosts