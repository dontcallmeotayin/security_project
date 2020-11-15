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

router.post('/blog', BlogCtrl.createBlog)
router.put('/blog/:id' , passport.authenticate('jwt', {session: false}), BlogCtrl.updateBlog)
router.put('/blog/delete/:id', BlogCtrl.deleteBlog)
router.get('/blog/:id', passport.authenticate('jwt', {session: false}), BlogCtrl.getBlogById)
router.get('/blogs', passport.authenticate('jwt', {session: false}), BlogCtrl.getBlogs)

router.post('/comment', passport.authenticate('jwt', {session: false}), CommentCtrl.createComment)
router.put('/comment/:id', passport.authenticate('jwt', {session: false}), CommentCtrl.updateComment)
router.put('/comment/delete/:id', passport.authenticate('jwt', {session: false}), CommentCtrl.deleteComment)
router.get('/comment/:id', passport.authenticate('jwt', {session: false}), CommentCtrl.getCommentById)
router.get('/comments', passport.authenticate('jwt', {session: false}), CommentCtrl.getComments)

router.get('/transactions', passport.authenticate('jwt', {session: false}), TransactionCtrl.getTransactions)

module.exports = router