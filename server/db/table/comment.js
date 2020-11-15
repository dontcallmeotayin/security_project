const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema(
    {
        owner_id: String,
        blog_id: String,
        comment: String,
        timestamp: Date,
        is_deleted: Boolean
    }
)

module.exports = mongoose.model('comment', Comment)