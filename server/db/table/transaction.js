const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Transaction = new Schema(
    {
        type: String,
        action: String,
        comment_id: String,
        blog_id: String,
        timestamp: Date
    }
)

module.exports = mongoose.model('transaction', Transaction)