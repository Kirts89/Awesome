import React from "react";
import Posts from "../Posts/Posts";
import PostForm from "../PostForm/PostForm";


const MyPosts = (props) => {

  return(
    <div>
      <PostForm store={props.store}/>
      <Posts store={props.store}/>
    </div>
  )
}

export default MyPosts