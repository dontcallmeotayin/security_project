const express = require('express')

const bodyParser = require('body-parser')

const cors = require('cors')



const db = require('./db')

const Router = require('./routes/router')



const app = express()

const apiPort = 4000

var https = require('https')
var fs = require('fs')

require('./passport');

var helmet = require('helmet')
app.use(helmet())


app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

app.use(bodyParser.json())



db.on('error', console.error.bind(console, 'MongoDB connection error:'))



// app.get('/', (req, res) => {

//     res.send('Hello World!')

// })

https.createServer({
    key: fs.readFileSync('../.cert/key.pem'),
    cert: fs.readFileSync('../.cert/cert.pem')
  }, app)
  .listen(4000, function () {
    console.log('Example app listening on port 4000! Go to https://localhost:4000/')
  })

app.use('/api', Router)



//app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))