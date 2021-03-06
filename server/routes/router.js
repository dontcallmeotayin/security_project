const express = require('express')
const UserCtrl = require('../controllers/UserController')
const BlogCtrl = require('../controllers/BlogController')
const CommentCtrl = require('../controllers/commentController')
const TransactionCtrl = require('../controllers/transactionController')
const router = express.Router()


router.post('/login',UserCtrl.login)

router.post('/user', UserCtrl.createUser)
router.get('/user/:id', passport.authenticate('jwt', {session: false}), UserCtrl.getUserById)
router.get('/users', passport.authenticate('jwt', {session: false}),UserCtrl.getUsers)

router.post('/blog', passport.authenticate('jwt', {session: false}), BlogCtrl.createBlog)
router.put('/blog/update/:id' , passport.authenticate('jwt', {session: false}), BlogCtrl.updateBlog)
router.delete('/blog/delete/:id', passport.authenticate('jwt', {session: false}), BlogCtrl.deleteBlog)
router.get('/blog/:id', passport.authenticate('jwt', {session: false}), BlogCtrl.getBlogById)
router.get('/blogs', passport.authenticate('jwt', {session: false}), BlogCtrl.getBlogs)
router.get('/blog/comments/:id', passport.authenticate('jwt', {session: false}), BlogCtrl.getBlogsAllComments)

router.post('/comment', passport.authenticate('jwt', {session: false}), CommentCtrl.createComment)
router.put('/comment/update/:id', passport.authenticate('jwt', {session: false}), CommentCtrl.updateComment)
router.delete('/comment/delete/:id', passport.authenticate('jwt', {session: false}), CommentCtrl.deleteComment)
router.get('/comment/:id', passport.authenticate('jwt', {session: false}), CommentCtrl.getCommentById)
router.get('/comments', passport.authenticate('jwt', {session: false}), CommentCtrl.getComments)

router.get('/transactions', passport.authenticate('jwt', {session: false}), TransactionCtrl.getTransactions)

module.exports = router