import React from "react";
import Loading from "../Loading/Loading";
import {setPost, setPostIsFetching} from "../../redux/postReducer";
import {connect} from "react-redux";
import Post from "./Post";
import {withRouter} from "react-router-dom";
import {PostsAPI} from "../../api/api";

class PostContainer extends React.Component {
  componentDidMount() {
    let id = this.props.match.params.id
    this.props.setPostIsFetching()
    PostsAPI.getPosts().then((data) => {
      this.props.setPost(data)
    })
  }
  render() {
    return <>
      {this.props.postState.isFetching ? <Loading/> : <Post post={this.props.postState.post}/>}
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    postState: state.postState,
  }
}

let mapDispatchToProps = {
  setPost,
  setPostIsFetching,
}

let WithUrlDataContainer = withRouter(PostContainer)

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainer)