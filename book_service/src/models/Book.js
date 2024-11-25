const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    name: { type: String, required: true },
    author: { type: String, required: true },
    isbn: { type: String, required: true, unique: true },
    status: { type: Boolean, default: true }
}, { timestamps: true })

const book = mongoose.model('book', bookSchema)
module.exports = bookSchema;

