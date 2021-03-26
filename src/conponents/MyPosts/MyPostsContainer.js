import React from "react";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {setMyPostsAC} from "../../redux/myPostsReducer";

let mapStateToProps = (state) => {
  return {
    posts: state.myPosts
  }
}

let mapDispatchToProps = (dispatch) => {

  return {
    setMyPosts: (posts) => {
      let action = setMyPostsAC(posts)
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)