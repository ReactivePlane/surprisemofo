const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let personSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
}, {
    collection: 'persons'
  })

module.exports = mongoose.model('Person', personSchema)