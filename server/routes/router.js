const express = require('express')
const UserCtrl = require('../controllers/UserController')
const BlogCtrl = require('../controllers/BlogController')
const CommentCtrl = require('../controllers/commentController')
const TransactionCtrl = require('../controllers/transactionController')
const router = express.Router()

router.post('/user', UserCtrl.createUser)
// router.put('/user/:id', UserCtrl.updateMovie)
// router.delete('/user/:id', UserCtrl.deleteMovie)
router.get('/user/:id', UserCtrl.getUserById)
router.get('/users', UserCtrl.getUsers)

router.post('/blog', BlogCtrl.createBlog)
router.put('/blog/:id', BlogCtrl.updateBlog)
router.put('/blog/delete/:id', BlogCtrl.deleteBlog)
router.get('/blog/:id', BlogCtrl.getBlogById)
router.get('/blogs', BlogCtrl.getBlogs)

router.post('/comment', CommentCtrl.createComment)
router.put('/comment/:id', CommentCtrl.updateComment)
router.put('/comment/delete/:id', CommentCtrl.deleteComment)
router.get('/comment/:id', CommentCtrl.getCommentById)
router.get('/comments', CommentCtrl.getComments)

router.get('/transactions', TransactionCtrl.getTransactions)

module.exports = router