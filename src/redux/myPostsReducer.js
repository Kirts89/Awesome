import {PostsAPI} from "../api/api";

const SET_MY_POSTS = 'SET_MY_POSTS'
const SET_MY_POSTS_IS_FETCHING = 'SET_MY_POSTS_IS_FETCHING'

let initialState = {
  items: [],
  isFetching: false,
}

const myPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MY_POSTS:
      return {
        ...state,
        items: action.posts,
        isFetching: false,
      }

    case SET_MY_POSTS_IS_FETCHING:
      return {
        ...state,
        isFetching: true,
      }

    default:
      return state
  }
}

export const setMyPosts = (posts) =>
  ({type: SET_MY_POSTS, posts})
export const setMyPostsIsFetching = () =>
  ({type: SET_MY_POSTS_IS_FETCHING})




export default myPostsReducer
