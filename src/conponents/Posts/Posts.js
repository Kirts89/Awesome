import React from "react";
import PostsItem from "../PostsItem/PostsItem";


function Posts (props) {
  const postsElements = props.states.posts.map(post => <PostsItem post={post} title={post.title} key={post.id}/>)

  return(
    <div className="posts">
      {postsElements}
    </div>
  )
}

export default Posts;



