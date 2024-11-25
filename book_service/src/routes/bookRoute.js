const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

// Define book routes
router.get('/', bookController.getAllBooks);           // GET /api/books - Get all books
router.get('/:id', bookController.getBookById);        // GET /api/books/:id - Get a single book by ID
router.post('/', bookController.createBook);           // POST /api/books - Create a new book
router.put('/:id', bookController.updateBook);         // PUT /api/books/:id - Update a book by ID
router.delete('/:id', bookController.deleteBook);      // DELETE /api/books/:id - Delete a book by ID

module.exports = router;
