const mongoose = require('mongoose')
const uri = "mongodb+srv://admin:WOf2W985Cpjh5Wsi@cluster0.kgj9c.mongodb.net/test";
const apiport = process.env.PORT || 4000

// const User = require('./table/user.js')

mongoose
    .connect(uri, { useNewUrlParser: true })
    // .then(console.log('Connected')
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db

//mock-data
// var mill = new User({id:1,username: 'littlemill',password:'hellomill',type:'moderator'})
// var yin = new User({id:2,username: 'yin_kiatsilp',password:'helloyin',type:'moderator'})
// var nut = new User({id:3,username: 'nnnnnnutt',password:'hellonut',type:'moderator'})
// var pam = new User({id:4,username: 'tagpam_',password:'hellopam',type:'moderator'})

// mill.save()
// yin.save()
// nut.save()
// pam.save()

