const express = require('express')
const connectDB = require('./src/config/db')

const app = express()

connectDB()
const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
    console.log(`Book Borrow Service Running ON PORT ${PORT}`);
})

module.exports = app;