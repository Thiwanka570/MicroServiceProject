const Borrow = require('../models/Borrow');
const axios = require('axios');

// Get all borrow records
const getAllBorrowRecords = async () => {
    return await Borrow.find();
};

// Get a borrow record by ID
const getBorrowRecordById = async (id) => {
    return await Borrow.findById(id);
};

// Borrow a book
const borrowBook = async (borrowData) => {
    const { userId, bookId } = borrowData;

    // Check book availability in Book Service
    const bookResponse = await axios.get(`http://book-service/api/books/${bookId}`);
    if (bookResponse.data.status !== 'available') {
        throw new Error('Book is not available for borrowing.');
    }

    const borrowRecord = new Borrow({ userId, bookId });
    const savedRecord = await borrowRecord.save();

    // Update book status to "unavailable" in Book Service
    await axios.put(`http://book-service/api/books/${bookId}`, { status: 'unavailable' });

    return savedRecord;
};

// Return a book
const returnBook = async (id) => {
    const borrowRecord = await Borrow.findById(id);
    if (!borrowRecord) {
        throw new Error('Borrow record not found.');
    }

    borrowRecord.returnDate = new Date();
    borrowRecord.status = 'returned';
    await borrowRecord.save();

    // Update book status to "available" in Book Service
    await axios.put(`http://book-service/api/books/${borrowRecord.bookId}`, { status: 'available' });

    return borrowRecord;
};

// Delete a borrow record
const deleteBorrowRecord = async (id) => {
    const borrowRecord = await Borrow.findByIdAndDelete(id);
    if (!borrowRecord) {
        throw new Error('Borrow record not found.');
    }

    return borrowRecord;
};

module.exports = {
    getAllBorrowRecords,
    getBorrowRecordById,
    borrowBook,
    returnBook,
    deleteBorrowRecord,
};
