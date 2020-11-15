const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema(
    {
        comment_id: String,
        owner_id: String,
        blog_id: String,
        text: String,
        timestamp: Date,
        is_deleted: Boolean
    }
)

module.exports = mongoose.model('comment', Comment)