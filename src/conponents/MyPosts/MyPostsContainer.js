import React from "react";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {getPostsThunk, setMyPosts, setMyPostsIsFetching} from "../../redux/myPostsReducer";
import Loading from "../Loading/Loading";
import {PostsAPI} from "../../api/api";

class MyPostsContainer extends React.Component {
  componentDidMount() {
  getPostsThunk()
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
  getPostsThunk
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer)