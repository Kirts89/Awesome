import {
  addPostAC, updateCurrentPostContentAC,
  updateCurrentPostDescriptionAC,
  updateCurrentPostTitleAC
} from "../../redux/myPostsReducer";

import PostForm from "./PostForm";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    post: state.myPosts.current,
    posts: state.myPosts.items,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onChangeTitle: (title) => {
      let action = updateCurrentPostTitleAC(title)
      dispatch(action)
    },
    onChangeDescription: (description) => {
      let action = updateCurrentPostDescriptionAC(description)
      dispatch(action)
    },
    onChangeContent: (content) => {
      let action = updateCurrentPostContentAC(content)
      dispatch(action)
    },
    onSubmit: () => {
      let action = addPostAC()
      dispatch(action)
    }
  }
}

const PostFormContainer = connect(mapStateToProps, mapDispatchToProps)(PostForm)

export default PostFormContainer;