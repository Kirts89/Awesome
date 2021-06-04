import React from "react";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {setMyPosts, setMyPostsIsFetching} from "../../redux/myPostsReducer";
import Loading from "../Loading/Loading";
import {PostsAPI} from "../../api/api";
import axios from "axios";

class MyPostsContainer extends React.Component {
  componentDidMount() {
    //this.props.setMyPostsIsFetching()
    // PostsAPI.getAll('posts').then((data) => {
    //this.props.setMyPosts(data)})
    this.props.setMyPostsIsFetching()
     axios.get('api/posts/').then((response) => {
      this.props.setMyPosts(response.data)
    })
  }
  render() {
    return <>
      {this.props.posts.isFetching ? <Loading/> : <MyPosts posts={this.props.posts}/>}
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    posts: state.myPosts,
  }
}

let mapDispatchToProps = {
  setMyPosts,
  setMyPostsIsFetching,
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer)