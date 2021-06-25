const mongoose = require('mongoose')

const TestSchema = new mongoose.Schema({
    title: String,
    contents: Array,
    image: String,
    releaseDate: Date,
    special: Boolean
})

module.exports = mongoose.model('Post', TestSchema)