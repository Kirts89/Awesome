import React from "react";
import Posts from "../Posts/Posts";
import PostForm from "../PostForm/PostForm";

const MyPosts = (props) => {

  let addPost = (description) => {
    let newPost = {
      id: props.states.posts.length + 1,
      imageUrl: "https://previews.123rf.com/images/tunnelmotions/tunnelmotions1908/tunnelmotions190800464/129157125-abstract-glowing-blue-triangle-wireframe-background-walpaper-3d-rendering.jpg",
      title: Math.random(),
      description: description,
    }
    props.states.posts.unshift(newPost)
  }

  addPost('Post Description')

  return(
    <div>
      <PostForm addPost={addPost}/>
      <Posts states={props.states}/>
    </div>
  )
}

export default MyPosts