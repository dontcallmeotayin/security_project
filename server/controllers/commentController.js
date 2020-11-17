const Comment = require('../db/table/comment')
const Transaction = require('../db/table/transaction')

createComment = (req, res) => {
    const body = req.body.data
    console.log(body)
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a comment',
        })
    }
    const comment = new Comment(body)
    
    if (!comment) {
        return res.status(400).json({ success: false, error: err })
    }

    newtime = new Date()
    comment.timestamp = newtime
    comment.is_deleted = false

    comment
        .save()
        .then(() => {
            var ts = new Transaction({type: 'comment',action:'create',comment_id:comment._id,timestamp:newtime})
            ts.save()
            return res.status(201).json({
                success: true,
                id: comment._id,
                time: comment.timestamp,
                message: 'Comment created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Comment not created!',
            })
        })
}

updateComment = async (req, res) => {
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Comment.findOne({ _id: req.params.id }, (err, comment) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Comment not found!',
            })
        }
        newtime = new Date()
        comment.timestamp = newtime
    
        comment.content = body.content

        comment
            .save()
            .then(() => {
                var ts = new Transaction({type: 'comment',action:'edit',comment_id:comment._id,timestamp:newtime})
                ts.save()        
                return res.status(200).json({
                    success: true,
                    id: comment._id,
                    message: 'Comment updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Comment not updated!',
                })
            })
    })
}

deleteComment = async (req, res) => {
    // const body = req.body
    // if (!body) {
    //     return res.status(400).json({
    //         success: false,
    //         error: 'You must provide a body to delete',
    //     })
    // }

    Comment.findOne({ _id: req.params.id }, (err, comment) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Comment not found!',
            })
        }

        newtime = new Date()
        comment.timestamp = newtime
    
        comment.is_deleted = true

        comment
            .save()
            .then(() => {
                var ts = new Transaction({type: 'comment',action:'delete',comment_id:comment._id,timestamp:newtime})
                ts.save()        
                return res.status(200).json({
                    success: true,
                    id: comment._id,
                    message: 'Comment deleted!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Comment not deleted!',
                })
            })
    })
}

// deleteComment = async (req, res) => {
//     await Comment.findOneAndDelete({ _id: req.params.id }, (err, comment) => {
//         if (err) {
//             return res.status(400).json({ success: false, error: err })
//         }
//         if (!comment) {
//             return res
//                 .status(404)
//                 .json({ success: false, error: `Comment not found` })
//         }

//         return res.status(200).json({ success: true, data: comment })

//     }).catch(err => console.log(err))
// }

getCommentById = async (req, res) => {
    await Comment.findOne({ _id: req.params.id }, (err, comment) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!comment) {
            return res
                .status(404)
                .json({ success: false, error: `Comment not found` })
        }
        return res.status(200).json({ success: true, data: comment })
    }).catch(err => console.log(err))
}

getComments = async (req, res) => {
    await Comment.find({}, (err, comment) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!comment.length) {
            return res
                .status(404)
                .json({ success: false, error: `Comment not found` })
        }
        return res.status(200).json({ success: true, data: comment })
    }).catch(err => console.log(err))
}

module.exports = {
    createComment,
    updateComment,
    deleteComment,
    getCommentById,
    getComments
}