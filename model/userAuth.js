const mongoose = require('mongoose')

const userAuth = new mongoose.Schema({
    userName: String,
    email: String,
    password: String
})

module.exports = mongoose.model('user',userAuth)