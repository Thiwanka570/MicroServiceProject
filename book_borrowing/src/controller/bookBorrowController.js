const bookBorrowService = require('../services/BookBorrowService');

// Get all borrow records
const getAllBorrowRecords = async (req, res) => {
    try {
        const borrowRecords = await bookBorrowService.getAllBorrowRecords();
        res.status(200).json(borrowRecords);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a borrow record by ID
const getBorrowRecordById = async (req, res) => {
    try {
        const borrowRecord = await bookBorrowService.getBorrowRecordById(req.params.id);
        if (!borrowRecord) {
            return res.status(404).json({ message: 'Borrow record not found' });
        }
        res.status(200).json(borrowRecord);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Borrow a book
const borrowBook = async (req, res) => {
    try {
        const borrowRecord = await bookBorrowService.borrowBook(req.body);
        res.status(201).json(borrowRecord);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Return a book
const returnBook = async (req, res) => {
    try {
        const updatedRecord = await bookBorrowService.returnBook(req.params.id);
        res.status(200).json(updatedRecord);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a borrow record
const deleteBorrowRecord = async (req, res) => {
    try {
        await bookBorrowService.deleteBorrowRecord(req.params.id);
        res.status(200).json({ message: 'Borrow record deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllBorrowRecords,
    getBorrowRecordById,
    borrowBook,
    returnBook,
    deleteBorrowRecord,
};
