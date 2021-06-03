const SET_POST = 'SET_POST'
const SET_POST_IS_FETCHING = 'SET_POST_IS_FETCHING'

const UPDATE_CURRENT_POST_TITLE = 'UPDATE_CURRENT_POST_TITLE'
const UPDATE_CURRENT_POST_DESCRIPTION = 'UPDATE_CURRENT_POST_DESCRIPTION'
const UPDATE_CURRENT_POST_CONTENT = 'UPDATE_CURRENT_POST_CONTENT'
const DEMO_2_IMAGE_URL = '/demo2.jpg'
const BLANK_POST = {
  title: '',
  description: '',
  content: '',
  imageUrl: DEMO_2_IMAGE_URL,
}

let initialState = {
  post: BLANK_POST,
  isFetching: true,
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POST:
      return {
        ...state,
        post: action.post,
        isFetching: false,
      }

    case SET_POST_IS_FETCHING:
      return {
        ...state,
        isFetching: true,
      }

    case UPDATE_CURRENT_POST_DESCRIPTION:
      return {
        ...state,
        post: {
          ...state.post,
          description: action.description,
        }
      }

    case UPDATE_CURRENT_POST_TITLE:
      return {
        ...state,
        post: {
          ...state.post,
          title: action.title,
        }
      }

    case UPDATE_CURRENT_POST_CONTENT:
      return {
        ...state,
        post: {
          ...state.post,
          content: action.content,
        }
      }
    default:
      return state
  }
}

export const setPost = (post) =>
  ({type: SET_POST, post})
export const setPostIsFetching = () =>
  ({type: SET_POST_IS_FETCHING})
export const updateCurrentPostTitle = (title) =>
  ({type: UPDATE_CURRENT_POST_TITLE, title})
export const updateCurrentPostDescription = (description) =>
  ({type: UPDATE_CURRENT_POST_DESCRIPTION, description})
export const updateCurrentPostContent = (content) =>
  ({type:UPDATE_CURRENT_POST_CONTENT, content})

export default postReducer