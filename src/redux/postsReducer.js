let initialState = {
  items: [],
}

const postsReducer = (state = initialState, action) => {
  console.log('pr',state)
  // state #=> {items: [{}], current: {}}
  switch (action.type) {
    default:
      return state
  }
}

export default postsReducer