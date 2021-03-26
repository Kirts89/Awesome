const {Schema, model} = require('mongoose')
const schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: false,
  },
})

module.exports = model('Post', schema)