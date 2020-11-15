const User = require('../db/table/user')
const jwt = require('jsonwebtoken')
      passport = require('passport')

login = async (req,res,next) => {
    passport.authenticate('local', {session: false}, (err, user, info) => {
        if (err) return next(err)
        if(user) {
            console.log("login")
            const token = jwt.sign({user}, 'your_jwt_secret',{expiresIn: 604800})
            return res.json({user, token})
        } else {
            return res.status(422).json(info)
         }
    })(req, res, next);
    // const body = req.body
    // if (!body) {
    //     return res.status(400).json({
    //         success: false,
    //         error: 'Please fill in username and password',
    //     })
    // } 
    // const username = body.username
    // const password = body.password

    // const user = await User.find({username: username}, (err, user) => {
    //     if (err) {
    //         return res.status(400).json({ success: false, error: err })
    //     }
    //     if (!user.length) {
    //         return res
    //             .status(404)
    //             .json({ success: false, error: `Incorrect username` })
    //     }
    // })
    // if (password == user[0].password) {
    //     console.log("Login completed")
    //     return res.status(201).json({success: true, user_id: user[0]._id,message: 'login completed'})
    // } else {
    //     return res.status(404).json({ success: false, error: `Incorrect password` })
    // }
    
}

createUser = (req, res) => {
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a user',
        })
    }
    const user = new User(body)
    if (!user) {
        return res.status(400).json({ success: false, error: err })
    }
    user
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: user._id,
                message: 'User created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'User not created!',
            })
        })
}

// updateUser = async (req, res) => {
//     const body = req.body
//     if (!body) {
//         return res.status(400).json({
//             success: false,
//             error: 'You must provide a body to update',
//         })
//     }

//     User.findOne({ _id: req.params.id }, (err, user) => {
//         if (err) {
//             return res.status(404).json({
//                 err,
//                 message: 'User not found!',
//             })
//         }
//         user.name = body.name
//         user.time = body.time
//         user.rating = body.rating
//         user
//             .save()
//             .then(() => {
//                 return res.status(200).json({
//                     success: true,
//                     id: user._id,
//                     message: 'User updated!',
//                 })
//             })
//             .catch(error => {
//                 return res.status(404).json({
//                     error,
//                     message: 'User not updated!',
//                 })
//             })
//     })
// }

// deleteUser = async (req, res) => {
//     await User.findOneAndDelete({ _id: req.params.id }, (err, user) => {
//         if (err) {
//             return res.status(400).json({ success: false, error: err })
//         }
//         if (!user) {
//             return res
//                 .status(404)
//                 .json({ success: false, error: `User not found` })
//         }

//         return res.status(200).json({ success: true, data: user })

//     }).catch(err => console.log(err))
// }

getUserById = async (req, res) => {
    await User.findOne({ user_id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }
        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}

getUsers = async (req, res) => {
    await User.find({}, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!user.length) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }
        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}

module.exports = {
    login,
    createUser,
    getUserById,
    getUsers
}