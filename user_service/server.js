const express = require('express');
const app = express();
const connectDB = require('./src/config/db');
const dotenv=require('dotenv');
const userRoutes = require('./src/routes/UserRoute');

dotenv.config();
connectDB();

app.use(express.json());
app.use('/api', userRoutes);


const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`Book Borrow Service Running ON PORT ${PORT}`);
})

module.exports = app;
