import React from "react";
import Posts from "../Posts/Posts";
import PostForm from "../PostForm/PostForm";


const MyPosts = (props) => {

  return(
    <div>
      <PostForm states={props.states}/>
      <Posts states={props.states}/>
    </div>
  )
}

export default MyPosts