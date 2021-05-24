import {PostsAPI} from "../api/api";

const UPDATE_CURRENT_POST_TITLE = 'UPDATE_CURRENT_POST_TITLE'
const UPDATE_CURRENT_POST_DESCRIPTION = 'UPDATE_CURRENT_POST_DESCRIPTION'
const UPDATE_CURRENT_POST_CONTENT = 'UPDATE_CURRENT_POST_CONTENT'
const DEMO_2_IMAGE_URL = '/demo2.jpg'
const ADD_POST = 'ADD_POST'
const UPDATE_POST = 'UPDATE_POST'
const SET_MY_POSTS = 'SET_MY_POSTS'
const SET_MY_POSTS_IS_FETCHING = 'SET_MY_POSTS_IS_FETCHING'

const BLANK_POST = {
  title: '',
  description: '',
  content: '',
  imageUrl: DEMO_2_IMAGE_URL,
}

let initialState = {
  items: [],
  current: {...BLANK_POST},
  isFetching: false,
}

const myPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        current: {
          ...BLANK_POST,
        },
        items: [
          {
            ...action.post,
            _id: state.items.length + 1,
          },
          ...state.items,
        ],
      }

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

    case UPDATE_CURRENT_POST_DESCRIPTION:
      return {
        ...state,
        current: {
          ...state.current,
          description: action.description,
        }
      }

    case UPDATE_CURRENT_POST_TITLE:
      return {
        ...state,
        current: {
          ...state.current,
          title: action.title,
        }
      }

    case UPDATE_CURRENT_POST_CONTENT:
      return {
        ...state,
        current: {
          ...state.current,
          content: action.content,
        }
      }

    default:
      return state
  }
}

export const updateCurrentPostTitle = (title) =>
  ({type: UPDATE_CURRENT_POST_TITLE, title})
export const updateCurrentPostDescription = (description) =>
  ({type: UPDATE_CURRENT_POST_DESCRIPTION, description})
export const updateCurrentPostContent = (content) =>
  ({type:UPDATE_CURRENT_POST_CONTENT, content})
export const addPost = (post) =>
  ({type: ADD_POST, post})
export const updatePost = (post) =>
  ({type: UPDATE_POST, post})
export const setMyPosts = (posts) =>
  ({type: SET_MY_POSTS, posts})
export const setMyPostsIsFetching = () =>
  ({type: SET_MY_POSTS_IS_FETCHING})

export const getPosts = (dispatch) => {
  dispatch.setMyPostsIsFetching()
  PostsAPI.getAll('posts').then((data) => {
    dispatch.setMyPosts(data)
  })
}

export default myPostsReducer
