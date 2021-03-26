const express = require('express');
const mongoose = require('mongoose');
const postRouters = require('./routes/posts')
const PORT = process.env.port || 3080
const app = express();

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

start().then(r => {});
