const express = require('express');
const bookBorrowController = require('../controllers/bookBorrowController');

const router = express.Router();

// Define borrow routes
router.get('/', bookBorrowController.getAllBorrowRecords);          // GET /api/borrow - Get all borrow records
router.get('/:id', bookBorrowController.getBorrowRecordById);       // GET /api/borrow/:id - Get a borrow record by ID
router.post('/', bookBorrowController.borrowBook);                  // POST /api/borrow - Borrow a book
router.put('/:id', bookBorrowController.returnBook);                // PUT /api/borrow/:id - Return a book
router.delete('/:id', bookBorrowController.deleteBorrowRecord);     // DELETE /api/borrow/:id - Delete a borrow record

module.exports = router;
