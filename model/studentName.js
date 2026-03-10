const mongoose = require('mongoose')

const studentName = new mongoose.Schema({
    studentName: String
})
module.exports = mongoose.model('studentName',studentName)