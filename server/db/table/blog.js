const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Blog = new Schema(
    {
        content: String,
        timestamp: Date,
        is_deleted: Boolean
    }
)

module.exports = mongoose.model('blog', Blog)