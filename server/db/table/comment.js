const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema(
    {
        comment_id: Number,
        owner_id: Number,
        blog_id: Number,
        text: String,
        timestamp: Date,
        is_deleted: Boolean
    }
)

module.exports = mongoose.model('comment', Comment)