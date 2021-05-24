import React from "react";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {setMyPosts, setMyPostsIsFetching} from "../../redux/myPostsReducer";
import Loading from "../Loading/Loading";
import {PostsAPI} from "../../api/api";

class MyPostsContainer extends React.Component {
  componentDidMount() {
    PostsAPI.getAll().then((data) => {
      this.props.setMyPosts(data)
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