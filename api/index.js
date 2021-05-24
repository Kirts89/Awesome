const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const postRouters = require('./routes/posts')
const sessionsRouters = require('./routes/sessions')
const PORT = process.env.port || 3080
const app = express();

app.use(express.urlencoded())
app.use(express.json())
app.use(cookieParser())
app.use(session({
  secret: 'keyboard cat',
  cookie: {}
}))

app.use(sessionsRouters)
app.use(postRouters)

async function start() {
  try {
    await mongoose.connect(
      'mongodb+srv://Kirts:8gTS5xQqw4aspLzi@cluster0.zjbr3.mongodb.net/posts',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
    app.listen(PORT, () =>{
      console.log('Server has been started...')
    })
  } catch (e) {
    console.log(e)
  }
}

start().then(_r => {});
