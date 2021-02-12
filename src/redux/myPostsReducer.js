const UPDATE_CURRENT_POST_TITLE = 'UPDATE-CURRENT-POST-TITLE'
const UPDATE_CURRENT_POST_DESCRIPTION = 'UPDATE-CURRENT-POST-DESCRIPTION'
const UPDATE_CURRENT_POST_CONTENT = 'UPDATE-CURRENT-POST-CONTENT'
const DEMO_2_IMAGE_URL = '/demo2.jpg'
const ADD_POST = 'ADD-POST'

const BLANK_POST = {
  id: null,
  title: '',
  description: '',
  content: '',
  imageUrl: DEMO_2_IMAGE_URL,
}

let initialState = {
  items: [],
  current: Object.assign({}, BLANK_POST),
}

const myPostsReducer = (state = initialState, action) => {
  // state #=> {items: [{}], current: {}}
  switch (action.type) {
    case ADD_POST:
      state.current.imageUrl = DEMO_2_IMAGE_URL
      state.current.id = state.items.length + 1
      state.items.unshift(state.current)
      state.current = Object.assign({}, BLANK_POST)
      return state

    case UPDATE_CURRENT_POST_DESCRIPTION:
      state.current.description = action.description
      return state

    case UPDATE_CURRENT_POST_TITLE:
      state.current.title = action.title
      return state

    case UPDATE_CURRENT_POST_CONTENT:
      state.current.content = action.content
      return state

    default:
      return state
  }
}

export const updateCurrentPostTitleActionCreator = (title) =>
  ({type: UPDATE_CURRENT_POST_TITLE, title: title})
export const updateCurrentPostDescriptionActionCreator = (description) =>
  ({type: UPDATE_CURRENT_POST_DESCRIPTION, description: description})
export const updateCurrentPostContentActionCreator = (content) =>
  ({type:UPDATE_CURRENT_POST_CONTENT, content: content})
export const addPostActionCreator = () =>
  ({type: ADD_POST})

export default myPostsReducer