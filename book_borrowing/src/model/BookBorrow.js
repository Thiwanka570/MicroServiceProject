const mongoose = require('mongoose')

const Bookborrow = mongoose.Schema({
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    borrowDate: {
        type: Date,
        default: Date.now()
    },

    returnDate: {
        type: Date,
        default: Date.now() + 7 * 24 * 60 * 60 * 1000
    }
}
)

module.exports = mongoose.model('Bookborrow', Bookborrow);