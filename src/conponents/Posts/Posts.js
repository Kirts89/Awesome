import React from "react";
import PostsItem from "../PostsItem/PostsItem";


function Posts (props) {
  const postsElements = props.store.state.posts.map(post => <PostsItem post={post} key={post.id}/>)

  return(
    <div className="posts">
      {postsElements}
    </div>
  )
}

export default Posts;



