let authUser = require('../model/userAuth')
let studentName = require('../model/studentName')
let bcrypt = require('bcrypt')

exports.studentNameCreate = async(req,res)=>{
    try{
        const studentData = req.body

        studentData.password = await bcrypt.hash(studentData.password,10)
        studentData.profile = req.file.filename  // single file upload

        const files = req.files.map(file => file.filename)    //  multiple files upload
         studentData.profile = files

        const user = await studentName.create(studentData)
        
        res.status(201).json({
            status: 'Success',
            message:'Data Enter success',
            data: user
        })
    }
    catch(err){
        res.status(400).json({status:'fail',message: err.message})
    }  
}
exports.studentNameView = async(req,res)=>{
    try{
        const studentallData = await studentName.find()
        res.status(200).json({
            status: 'Success',
            message: 'Data fetch success',
            data: studentallData
        })
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.studentNameDlete = async(req,res)=>{
    try{
        const deleteId = req.params.id
        const deleteStudent = await studentName.findByIdAndDelete(deleteId)
        res.status(200).json({
            status: 'Success',
            message: 'Data deleted success',
            data: deleteStudent
        })
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        })
    }
}
exports.studentNameEdit = async(req,res)=>{
    try{
        const editId = req.params.id
        const updateStudent = await studentName.findByIdAndUpdate(editId,req.body , {new : true})
        res.status(200).json({
            status: 'Success',
            message: 'Data updated success',
            data: updateStudent
        })
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        })
    }
}