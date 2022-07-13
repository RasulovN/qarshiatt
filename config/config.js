const config = require('config');

// const PORT = process.env.port || 5000
const PORT = config.get("Customer.port")  || 5000
const SECRET_KEY = config.get("Customer.NO_SECRET_KEY")
module.exports = {
    // connection,
    PORT,
    SECRET_KEY
}