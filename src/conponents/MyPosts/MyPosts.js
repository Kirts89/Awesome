import React from "react";
import Posts from "../Posts/Posts";
import PostForm from "../PostForm/PostForm";
import PostsItem from "../PostsItem/PostsItem";


const MyPosts = (props) => {

  return(
    <div>
      <PostForm store={props.store}/>
      <PostsItem post={props.store.state.currentPost}/>
      <Posts store={props.store}/>
    </div>
  )
}

export default MyPosts