import React from "react";
import PostsItem from "../PostsItem/PostsItem";


function Posts (props) {
  const postsElements = props.posts.items.map(post => <PostsItem post={post} key={post._id}/>)

  return(
    <div className="posts">
      {postsElements}
    </div>
  )
}

export default Posts;



