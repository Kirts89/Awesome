import React from "react";
import Posts from "../Posts/Posts";
import PostsItem from "../PostsItem/PostsItem";
import PostFormContainer from "../PostForm/PostFormContainer";
import axios from "../../axios";


class MyPosts extends React.Component {
  constructor(props) {
    super(props);

    if (!props.posts.loaded) {
      axios.get('posts').then((response) => {
        console.log(response)
        props.setMyPosts(response.data)
      })
    }
  }
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