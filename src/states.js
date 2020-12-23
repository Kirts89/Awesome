import React from "react";
let renderTree = () => {
  console.log('state ')
}

const states = window.states ={
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
  currentPost: {
    description: 'Text'
  },
  addPost: (event) => {
    event.preventDefault()

    let defaultPost = {
      id: states.posts.length + 1,
      imageUrl: "https://previews.123rf.com/images/tunnelmotions/tunnelmotions1908/tunnelmotions190800464/129157125-abstract-glowing-blue-triangle-wireframe-background-walpaper-3d-rendering.jpg",
      title: Math.random(),
      description: null,
    }

    let post = Object.assign(defaultPost, states.currentPost)

    states.posts.unshift(post)
    renderTree(states)
  },
  updateCurrentPostDescription: (event) => {
    states.currentPost.description = event.target.value
    renderTree(states)
  }
}
export const subscribe = (observer) => {
renderTree = observer;
}

export default states;