const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config();

const userServiceUrl = process.env.USER_SERVICE_URL;
const bookServiceUrl = process.env.BOOK_SERVICE_URL;
const borrowServiceUrl = process.env.BORROW_SERVICE_URL;

const forwardRequest = async (req, res, serviceUrl) => {
    try {
        const { method, originalUrl, body, headers } = req;
        console.log(method);
        console.log(originalUrl);
        console.log(body);
        console.log(headers);
        const url = `${serviceUrl}${originalUrl}`;
        console.log('URL : ',url);
        const response = await axios({
            method,
            url,
            data: body,
            headers
        });
        res.status(response.status).json(response.data);
    } catch (error) {
        const status = error.response?.status || 500;
        const message = error.response?.data?.message || 'Internal Server Error';
        res.status(status).json({ message });
    }
}

module.exports = {
    userService: (req, res) => forwardRequest(req, res, userServiceUrl),
    bookService: (req, res) => forwardRequest(req, res, bookServiceUrl),
    borrowService: (req, res) => forwardRequest(req, res, borrowServiceUrl),
};