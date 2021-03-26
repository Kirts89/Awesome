import {combineReducers, createStore} from "redux";

import myPostsReducer from "./myPostsReducer";
import postsReducer from "./postsReducer";

let reducers = combineReducers({
  myPosts: myPostsReducer,
  posts: postsReducer,
})

let store = createStore(reducers)
export default store
