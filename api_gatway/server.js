const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const routes = require('./routes/apigatewayroute')

dotenv.config()
const app = express();

app.use(express.json())
app.use(cors())

app.use('/api', routes)

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        error: err.message || 'Internal Server Error'
    });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API Gateway Running On PORT ${PORT}`);
});