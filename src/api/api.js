import axios from "axios";

const Axios = axios.create({
  baseURL: 'http://localhost:3000/api/',
});

export const PostsAPI = {
  // getAll(), get(id), create(post), update(post), destroy(id)
  getAll(params= {}) {
    return Axios.get('posts/', params).then(response => response.data)
  },
  get(id) {
    return Axios.get('posts/', id).then(response => response.data)
  },
  create(post) {
    return Axios.post('posts/', {post: post}).then((response) => response.data)
  },
  update(post) {
    return Axios.put('posts/' + post.id, {post: post}).then(response => response.data)
  },
  destroy(id) {
    return Axios.delete('posts/' + id).then(response => response.data)
  },
}

