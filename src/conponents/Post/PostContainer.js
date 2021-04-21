import React from "react";
import axios from "../../axios";
import Loading from "../Loading/Loading";
import {setPost, setPostIsFetching} from "../../redux/postReducer";
import {connect} from "react-redux";
import Post from "./Post";
import {withRouter} from "react-router-dom";

class PostContainer extends React.Component {
  componentDidMount() {
    let id = this.props.match.params.id
    this.props.setPostIsFetching()
    axios.get('posts/' + id).then((response) => {
      this.props.setPost(response.data)
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