const express = require('express')
const router = express.Router()

let Uc = require('../controller/studentData')

router.post('/studentAUth',Uc.register)
router.post('/studentAuth',Uc.login)

router.post('/students',Uc.studentNameCreate)
router.get('/students',Uc.studentNameView)
router.delete('/students/:id',Uc.studentNameDlete)
router.put('/students/:id',Uc.studentNameEdit)

module.exports = router