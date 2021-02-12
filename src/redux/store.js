import {combineReducers, createStore} from "redux";

import myPostsReducer from "./myPostsReducer";
import postsReducer from "./postsReducer";

let reducers = combineReducers({
  myPosts: myPostsReducer,
  posts: postsReducer,
})

let store = createStore(reducers)
console.log(store)
export default store















window.oldStore = {
  _state: {
    myPostsReducer: {
      items: [
        {
          id: '1',
          title: 'Title 1',
          imageUrl: '/demo.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          content: ''
        },
      ],
    },
    myPosts: {

    },
  },

  get state() { return this._state },

  subscribe(renderTreeCallback) {
    this._renderTree = renderTreeCallback;
  },

  dispatch(action) {
    this._state.myPosts = myPostsReducer(this._state.myPosts, action)
    this._renderTree(this)
  }
}

