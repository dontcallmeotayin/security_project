const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Transaction = new Schema(
    {
        transaction_id: Number,
        type: String,
        action: String,
        comment_id: Number,
        blog_id: Number,
        timestamp: Date
    }
)

module.exports = mongoose.model('transaction', Transaction)