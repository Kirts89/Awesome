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

export default window.store = {
  _state: {
    posts: [
      {
        id: '1',
        title: 'Title 1',
        imageUrl: '/demo.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        content: ''
      },
    ],
    currentPost: Object.create(BLANK_POST),
  },

  get state() { return this._state },

  subscribe(renderTreeCallback) {
    this._renderTree = renderTreeCallback;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      this._state.currentPost.imageUrl = DEMO_2_IMAGE_URL
      this._state.currentPost.id = this._state.posts.length + 1

      this._state.posts.unshift(this._state.currentPost)
      this._state.currentPost = Object.create(BLANK_POST)
      this._renderTree(this)
    }
    else if (action.type === UPDATE_CURRENT_POST_DESCRIPTION) {
      this._state.currentPost.description = action.description
      this._renderTree(this)
    }
    else if (action.type === UPDATE_CURRENT_POST_TITLE) {
      this._state.currentPost.title = action.title
      this._renderTree(this)
    }
    else if (action.type === UPDATE_CURRENT_POST_CONTENT) {
     this._state.currentPost.content = action.content
      this._renderTree(this)
    }
    else {
      console.error(`Action ${action.type} not found`)
    }
  }
}
export const updateCurrentPostTitleActionCreator = (title) =>
  ({type: UPDATE_CURRENT_POST_TITLE, title: title})
export const updateCurrentPostDescriptionActionCreator = (description) =>
  ({type: UPDATE_CURRENT_POST_DESCRIPTION, description: description})
export const updateCurrentPostContentActionCreator = (content) =>
  ({type:UPDATE_CURRENT_POST_CONTENT, content: content})
export const addPostActionCreator = () =>
  ({ type: ADD_POST })
