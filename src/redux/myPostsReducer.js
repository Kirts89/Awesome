const UPDATE_CURRENT_POST_TITLE = 'UPDATE_CURRENT_POST_TITLE'
const UPDATE_CURRENT_POST_DESCRIPTION = 'UPDATE_CURRENT_POST_DESCRIPTION'
const UPDATE_CURRENT_POST_CONTENT = 'UPDATE_CURRENT_POST_CONTENT'
const DEMO_2_IMAGE_URL = '/demo2.jpg'
const ADD_POST = 'ADD_POST'
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
export const setMyPosts = (posts) =>
  ({type: SET_MY_POSTS, posts})
export const setMyPostsIsFetching = () =>
  ({type: SET_MY_POSTS_IS_FETCHING})

export default myPostsReducer


// let a = {
//   posts: [{title: 1}, {title: 2}],
//   current: {id: 1, title: 'C'},
// }

// Memory #001 {title: 1}
// Memory #002 {title: 2}
// Memory #003 [Memory #001, Memory #002]
// Memory #004 {id: 1, title: "C"}
// Memory #005 {posts: Memory #003, current: Memory #004, c: 22}

// a => Memory #00005
// b = a
// b => Memory #00005

// c = {...a}
// Memory #006 {posts: Memory #003, current: Memory #004, c: 22}


// d = {...a, posts: a.posts}
// Memory #007 = [Memory #001, Memory #002]
// Memory #008 {posts: Memory #007, current: Memory #004, c: 22}

// e = {...a, posts: [...a.posts]}
// Memory #009 {title: 1}
// Memory #010 {title: 2}
// Memory #011 = [Memory #009, Memory #010]
// Memory #012 {posts: Memory #011, current: Memory #004, c: 22}


// ACTION
// state = {posts: Memory #003, current: Memory #004, c: 22}
// result = {...a, current: {...a.current, title: 'New'}}
// Memory #013 {id: 1, title: "New"}
// Memory #014 {posts: Memory #003, current: Memory #0013, c: 22}
// return Memory #0014


// RENDER 1 MyPosts
// Memory #005 {posts: Memory #003, current: Memory #004, c: 22}
// {attrs: Memory #005, html: Memory #101}
// ACTION
// RENDER 2 MyPosts
// {attrs: Memory #014, html: Memory #101}
// {attrs: Memory #014, html: Memory #102}
// Use JSX 1 IF Memory #014 attrs == Memory #005 attrs

// Memory #005 {posts: Memory #003, current: Memory #004, c: 22}
// Memory #014 {posts: Memory #003, current: Memory #0013, c: 22}


// RENDER <PostFormContainer/> +
//   RENDER <PostForm post=post> + Memory #004 Memory #0013
//     {id: 1, title: "C"}
//     {id: 1, title: "New"}
// RENDER <PostsItem post={props.posts.current}/> + Memory #004 Memory #0013
// //     {id: 1, title: "C"}
// //     {id: 1, title: "New"}
// RENDER <Posts posts={props.posts}/>
// [Memory #001, Memory #002]
// [Memory #001, Memory #002]

