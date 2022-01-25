require("dotenv").config()

module.exports = {
    URI: process.env.URI,
    PORT: process.env.PORT || 5001,
}