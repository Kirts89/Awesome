import {applyMiddleware, combineReducers, createStore} from "redux";

import myPostsReducer from "./myPostsReducer";
import postsReducer from "./postsReducer";
import postReducer from "./postReducer";
import thunkMiddleware from "redux-thunk";
let reducers = combineReducers({
  myPosts: myPostsReducer,
  posts: postsReducer,
  postState: postReducer,
})

let store = createStore(reducers)
export default store
