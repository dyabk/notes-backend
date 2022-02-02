const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://majabaza:${password}@cluster0.k9dqp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(url)