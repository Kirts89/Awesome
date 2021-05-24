import {applyMiddleware, combineReducers, createStore} from "redux";

import myPostsReducer from "./myPostsReducer";
import postsReducer from "./postsReducer";
import postReducer from "./postReducer";

let reducers = combineReducers({
  myPosts: myPostsReducer,
  posts: postsReducer,
  postState: postReducer,
})

let store = createStore(reducers, applyMiddleware())
export default store
