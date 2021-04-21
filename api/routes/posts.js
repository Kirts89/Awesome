const {Router} = require('express')
const Post = require('../models/Post')

const router = Router()

const DEFAULT_FETCHING_MS = 500

function sleep(ms) {
  ms = ms || DEFAULT_FETCHING_MS
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

router.get('/api/posts', async (request, response) => {
  await sleep()
  const posts = await Post.find({}).sort('-_id')

  response.json(posts);
})

router.get('/api/posts/:id', async (request, response) => {
  await sleep()
  const post = await Post.findOne({id: request.body.id})

  response.json(post);
})

router.post('/api/posts', async (request, response) => {
  await sleep()
  const post = new Post(request.body.post)

  try {
    await post.save()
    response.json(post)
  } catch (err) {
    if (err.name === 'ValidationError') {
      return response.status(400).json({ error: err.message });
    }
  }
})

router.put('/api/posts/:id', async (request, response) => {
  await sleep()

  try {
    const post = await Post.findOneAndUpdate(request.body)
    response.json(post)
  } catch (err) {
    if (err.name === 'ValidationError') {
      return response.status(400).json({ error: err.message });
    }
  }
})

router.delete('/api/posts/:id', async (request, response) => {
  await sleep()
  const post = await Post.findOneAndDelete(request.body)

  response.json(post)
})

module.exports = router