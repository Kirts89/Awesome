const UPDATE_CURRENT_POST_DESCRIPTION = 'UPDATE-CURRENT-POST-DESCRIPTION'
const ADD_POST = 'ADD-POST'
export default window.store = {
  _state: {
    posts: [
      {
        id: '1',
        title: 'Title 1',
        imageUrl: '/demo.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        id: '2',
        title: 'Title 2',
        imageUrl: '/demo.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        id: '3',
        title: 'Title 3',
        imageUrl: '/demo.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        id: '4',
        title: 'Title 4',
        imageUrl: '/demo.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
    ],
    currentPost: {},
  },

  get state() { return this._state },


  subscribe(renderTreeCallback) {
    this._renderTree = renderTreeCallback;
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      const defaultPost = {
        id: this._state.posts.length + 1,
        imageUrl: "https://previews.123rf.com/images/tunnelmotions/tunnelmotions1908/tunnelmotions190800464/129157125-abstract-glowing-blue-triangle-wireframe-background-walpaper-3d-rendering.jpg",
        title: Math.random(),
        description: null,
      }

      let post = Object.assign(defaultPost, this._state.currentPost)

      this._state.posts.unshift(post)
      this._renderTree(this)
    }
    else if (action.type === UPDATE_CURRENT_POST_DESCRIPTION) {
      this._state.currentPost.description = action.description
      this._renderTree(this)
    }
    else {
      console.error(`Action ${action.type} not found`)
    }
  }
}
export const updateCurrentPostDescriptionActionCreator = (description) =>
  ({type: UPDATE_CURRENT_POST_DESCRIPTION, description: description})
export const addPostActionCreator = () =>
  ({ type: ADD_POST })
