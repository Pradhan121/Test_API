const mongoose = require('mongoose')

const studentName = new mongoose.Schema({
    studentName: String,
    password: String,
    profile: String
})
module.exports = mongoose.model('studentName',studentName)