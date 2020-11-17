const Blog = require('../db/table/blog')
const Comment = require ('../db/table/comment')
const Transaction = require('../db/table/transaction')

createBlog = (req,res,next) => {
    const body = req.body.data
    console.log(body)
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a blog',
        })
    }
    const blog = new Blog(body)
    
    if (!blog) {
        return res.sendstatus(400).json({ success: false, error: err })
    }

    newtime = new Date()
    blog.timestamp = newtime
    blog.is_deleted = false

    blog
        .save()
        .then(() => {
            var ts = new Transaction({type: 'blog',action:'create',blog_id:blog._id,timestamp:newtime})
            ts.save()
            return res.status(201).json({
                success: true,
                id: blog._id,
                time: blog.timestamp,
                message: 'Blog created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Blog not created!',
            })
        })
}


updateBlog = async (req, res) => {
    const body = req.body.data
    console.log(body);
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Blog.findOne({ _id: req.params.id }, (err, blog) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Blog not found!',
            })
        }
        newtime = new Date()
        blog.timestamp = newtime
    
        blog.content = body.content

        blog
            .save()
            .then(() => {
                var ts = new Transaction({type: 'blog',action:'edit',blog_id:blog._id,timestamp:newtime})
                ts.save()        
                return res.status(200).json({
                    success: true,
                    id: blog._id,
                    message: 'Blog updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Blog not updated!',
                })
            })
    })
}

deleteBlog = async (req, res) => {
    // const body = req.body
    // if (!body) {
    //     return res.status(400).json({
    //         success: false,
    //         error: 'You must provide a body to delete',
    //     })
    // }

    Blog.findOne({ _id: req.params.id }, (err, blog) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Blog not found!',
            })
        }

        newtime = new Date()
        blog.timestamp = newtime
    
        blog.is_deleted = true

        blog
            .save()
            .then(() => {
                var ts = new Transaction({type: 'blog',action:'delete',blog_id:blog._id,timestamp:newtime})
                ts.save()        
                return res.status(200).json({
                    success: true,
                    id: blog._id,
                    message: 'Blog deleted!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Blog not deleted!',
                })
            })
    })
}

getBlogById = async (req, res) => {
    await Blog.findOne({ _id: req.params.id }, (err, blog) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!blog) {
            return res
                .status(404)
                .json({ success: false, error: `Blog not found` })
        }
        return res.status(200).json({ success: true, data: blog })
    }).catch(err => console.log(err))
}

getBlogs = async (req, res) => {
    await Blog.find({}, (err, blog) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!blog.length) {
            return res
                .status(404)
                .json({ success: false, error: `Blog not found` })
        }
        return res.status(200).json({ success: true, data: blog })
    }).catch(err => console.log(err))
}

getBlogsAllComments = async (req,res) => {
    await Comment.find({ blog_id: req.params.id }, (err, comments) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!comments.length) {
            return res
                .status(200)
                .json({ success: true, data: "no comments" })
        }
        return res.status(200).json({ success: true, data: comments })
    }).catch(err => console.log(err))
}

module.exports = {
    createBlog,
    updateBlog,
    deleteBlog,
    getBlogById,
    getBlogs,
    getBlogsAllComments
}