import {
  updatePost,
  updateCurrentPostContent,
  updateCurrentPostDescription,
  updateCurrentPostTitle
} from "../../redux/myPostsReducer";

import {connect} from "react-redux";
import PostForm from "../PostForm/PostForm";
import {PostsAPI} from "../../api/api";

const onSubmit = (post) => {
  // PostsAPI.update(post).then(data => updatePost(data.post))
  PostsAPI.update(post)
  return updatePost(post)
}

const mapStateToProps = (state) => {
  return {
    title: 'Edit Post',
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

const EditPostContainer = connect(mapStateToProps, mapDispatchToProps)(PostForm)

export default EditPostContainer;