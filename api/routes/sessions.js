const {Router} = require('express')
const User = require('../models/User')

const router = Router()

router.get('/api/sessions', async (request, response) => {
  const user = request.session.user
  response.json(user);
})

router.post('/api/sessions', async (request, response) => {
  const user = User.findOne({login: request.body.login})

  if (user && request.body.password === user.password) {
    request.session.user = user
    response.json(user);
  } else {
    response.status(403).json({error: 'Wrong Login or Password'})
  }
})

router.delete('/api/sessions', async (request, response) => {
  request.session.user = null
  
  response.json({});
})

module.exports = router