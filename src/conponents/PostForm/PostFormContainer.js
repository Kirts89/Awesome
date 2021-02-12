import React from "react";
import {
  addPostActionCreator, updateCurrentPostContentActionCreator,
  updateCurrentPostDescriptionActionCreator,
  updateCurrentPostTitleActionCreator
} from "../../redux/myPostsReducer";

import store from "../../redux/store";
import PostForm from "./PostForm";


const PostFormContainer = (props) => {
  // PROPS {posts: {items: [], current: {}}}

  const onChangeTitle = (title) => {
   let action = updateCurrentPostTitleActionCreator(title)
   store.dispatch(action)
  }

  const onChangeDescription = (description) => {
    let action = updateCurrentPostDescriptionActionCreator(description)
    store.dispatch(action)
  }

  const  onChangeContent = (content) => {
    let action = updateCurrentPostContentActionCreator(content)
    store.dispatch(action)
  }

  const onSubmit = () => {
    let action = addPostActionCreator() // {type: 'ADD-POST'}
    store.dispatch(action)
  }

  return (
    <PostForm
      post={props.posts.current}
      onChangeTitle={onChangeTitle}
      onChangeDescription={onChangeDescription}
      onChangeContent={onChangeContent}
      onSubmit={onSubmit}
    />
    )
}

export default PostFormContainer;