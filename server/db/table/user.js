const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        user_id: Number,
        username: String,
        password: String,
        type: String,
    }
)

module.exports = mongoose.model('user', User)