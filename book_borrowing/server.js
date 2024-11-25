const express = require('express')
const connectDB = require('./src/config/db')
const borrowRouter = require('./src/route/route')

const app = express()

connectDB()
app.use('/api/borrow', borrowRouter);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Book Borrow Service Running ON PORT ${PORT}`);
})

module.exports = app;