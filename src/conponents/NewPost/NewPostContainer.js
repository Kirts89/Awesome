import {
  addPost,
  updateCurrentPostContent,
  updateCurrentPostDescription,
  updateCurrentPostTitle
} from "../../redux/myPostsReducer";

import {connect} from "react-redux";
import PostForm from "../PostForm/PostForm";
import {PostsAPI} from "../../api/api";

const onSubmit = (post) => {
  //PostsAPI.create(post).then(data => addPost(data.post))
  PostsAPI.create(post)
  return addPost(post)
}

const mapStateToProps = (state) => {
  return {
    title: 'New Post',
    post: state.myPosts.current,
    posts: state.myPosts.items,
  }
}

const mapDispatchToProps = {
  onSubmit,
  updateCurrentPostContent,
  updateCurrentPostDescription,
  updateCurrentPostTitle,
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(PostForm)

export default NewPostContainer;