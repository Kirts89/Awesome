import React from "react";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {setMyPosts, setMyPostsIsFetching, getPosts} from "../../redux/myPostsReducer";
import Loading from "../Loading/Loading";

class MyPostsContainer extends React.Component {
  componentDidMount() {
    this.props.getPosts()
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
  getPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer)