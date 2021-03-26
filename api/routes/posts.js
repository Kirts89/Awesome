const {Router} = require('express')
const Post = require('../models/Post')

const router = Router()

router.get('/api/posts', async (request, response) => {
  // return response.json([{id: 1, title: 'Title', description: 'Description', content: 'Content', imageUrl: '/demo.jpg'}])

  const posts = await Post.find({})
  response.json(posts);
})

router.post('/api/posts', async (request, response) => {
  const post = new Post({
    title: "Title " + Math.random(),
    description: "Description " + Math.random(),
  })

  await post.save()
  response.json(post)
})

module.exports = router