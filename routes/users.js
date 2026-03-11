const express = require('express')
const router = express.Router()
const multer = require('multer')

let Uc = require('../controller/studentData')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer({ storage: storage })


router.post('/studentAUth',Uc.register)
router.post('/studentAuth',Uc.login)

router.post('/students',upload.single('profile'), Uc.studentNameCreate)
router.get('/students',Uc.studentNameView)
router.delete('/students/:id',Uc.studentNameDlete)
router.put('/students/:id',Uc.studentNameEdit)

module.exports = router