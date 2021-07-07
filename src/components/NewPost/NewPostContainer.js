import {
  updateCurrentPostContent,
  updateCurrentPostDescription,
  updateCurrentPostTitle
} from "../../redux/postReducer";

import {connect} from "react-redux";
import PostForm from "../PostForm/PostForm";
import {PostsAPI} from "../../api/api";

const onSubmit = (post, props) => {
  PostsAPI.create(post)
    .then((_data) => {
      props.history.push('/my-posts');
    })
}

const mapStateToProps = (state) => {
  return {
    title: 'New Post',
    post: state.postState.post,
    onSubmit,
  }
}

const mapDispatchToProps = {
  updateCurrentPostContent,
  updateCurrentPostDescription,
  updateCurrentPostTitle,
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(PostForm)

export default NewPostContainer;