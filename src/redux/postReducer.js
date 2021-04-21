const SET_POST = 'SET_POST'
const SET_POST_IS_FETCHING = 'SET_POST_IS_FETCHING'

let initialState = {
  post: null,
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
    default:
      return state
  }
}

export const setPost = (post) =>
  ({type: SET_POST, post})
export const setPostIsFetching = () =>
  ({type: SET_POST_IS_FETCHING})

export default postReducer