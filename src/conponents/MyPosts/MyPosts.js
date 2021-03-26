import React from "react";
import Posts from "../Posts/Posts";
import PostsItem from "../PostsItem/PostsItem";
import PostFormContainer from "../PostForm/PostFormContainer";
import Axios from "../../Axios";


class MyPosts extends React.Component {
  constructor() {
    super();

    Axios.get('posts').then((response) => {
      console.log(response)
      //props.setMyPosts(posts)
    })}
  render() {
    return(
      <div>
        <PostFormContainer/>
        <PostsItem post={this.props.posts.current}/>
        <Posts posts={this.props.posts}/>
      </div>
    )
  }
}

export default MyPosts