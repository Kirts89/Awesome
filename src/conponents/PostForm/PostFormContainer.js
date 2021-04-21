import {
  addPost as addPostAC,
  updateCurrentPostContent,
  updateCurrentPostDescription,
  updateCurrentPostTitle
} from "../../redux/myPostsReducer";

import PostForm from "./PostForm";
import {connect} from "react-redux";
import axios from "../../axios";

const addPost = (post) => {
  axios.post('posts', {post: post}).then((response) => {
    post = response.data
  })
  return addPostAC(post)
}

const mapStateToProps = (state) => {
  return {
    post: state.myPosts.current,
    posts: state.myPosts.items,
  }
}

const mapDispatchToProps = {
  addPost,
  updateCurrentPostContent,
  updateCurrentPostDescription,
  updateCurrentPostTitle,
}

const PostFormContainer = connect(mapStateToProps, mapDispatchToProps)(PostForm)

export default PostFormContainer;