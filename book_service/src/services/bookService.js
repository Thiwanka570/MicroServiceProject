const Book = require('../models/Book');

// Get all books
const getAllBooks = async () => {
    return await Book.find();
};

// Get a book by ID
const getBookById = async (id) => {
    return await Book.findById(id);
};

// Create a new book
const createBook = async (bookData) => {
    const { isbn } = bookData;

    // Check for duplicate ISBN
    const existingBook = await Book.findOne({ isbn });
    if (existingBook) {
        throw new Error('Book with this ISBN already exists.');
    }

    const book = new Book(bookData);
    return await book.save();
};

// Update a book
const updateBook = async (id, bookData) => {
    const updatedBook = await Book.findByIdAndUpdate(id, bookData, {
        new: true,
        runValidators: true,
    });

    if (!updatedBook) {
        throw new Error('Book not found.');
    }

    return updatedBook;
};

// Delete a book
const deleteBook = async (id) => {
    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
        throw new Error('Book not found.');
    }

    return deletedBook;
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
};
