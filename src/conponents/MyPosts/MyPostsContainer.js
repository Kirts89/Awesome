import React from "react";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {setMyPosts, setMyPostsIsFetching} from "../../redux/myPostsReducer";
import axios from "../../axios";
import Loading from "../Loading/Loading";

class MyPostsContainer extends React.Component {
  componentDidMount() {
    this.props.setMyPostsIsFetching()
    axios.get('posts').then((response) => {
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