const mongoose = require('mongoose')

const studentName = new mongoose.Schema({
    studentName: String,
    password: String,
    profile: String // single file upload
    // profile: [String]  multiple file upload
})
module.exports = mongoose.model('studentName',studentName)