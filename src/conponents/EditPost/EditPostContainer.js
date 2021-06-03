import {
  setPost,
  setPostIsFetching,
  updateCurrentPostContent,
  updateCurrentPostDescription,
  updateCurrentPostTitle,
} from "../../redux/postReducer";

import {connect} from "react-redux";

import PostForm from "../PostForm/PostForm";
import {PostsAPI} from "../../api/api";
import React from "react";
import Loading from "../Loading/Loading";

class EditPostContainer extends React.Component {
  componentDidMount() {
    let id = this.props.match.params.id
    PostsAPI.get(id)
      .then((data) => {
        this.props.setPost(data)
      })
  }
  render() {
    return <>
      {this.props.postState.isFetching ? <Loading/> : <PostForm {...this.props} post={this.props.postState.post}/>}
    </>
  }
}

const onSubmit = (post, props) => {
  PostsAPI.update(post)
    .then((data) => {
      props.history.push('/posts/show/' + data._id);
    })
}

const mapStateToProps = (state) => {
  return {
    title: 'Edit Post',
    postState: state.postState,
    onSubmit,
  }
}

const mapDispatchToProps = {
  updateCurrentPostContent,
  updateCurrentPostDescription,
  updateCurrentPostTitle,
  setPost,
  setPostIsFetching,
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostContainer)



