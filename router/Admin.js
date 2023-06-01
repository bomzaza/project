const express = require('express')
const multer  = require('multer')
const path = require('path')
const mustLoginAdmin = require('../middlewares/mustLoginAdmin')
const router = express.Router()

router.get('/',mustLoginAdmin, require('../controller/adminControll/AdminIndex'))
router.get('/check',mustLoginAdmin, require('../controller/adminControll/AdminCheck'))
router.get('/incom',mustLoginAdmin, require('../controller/adminControll/AdminImcom'))
router.get('/reserve',mustLoginAdmin,  require('../controller/adminControll/AdminReserve'))
router.get('/bill',mustLoginAdmin, require('../controller/adminControll/AdminBill'))
router.get('/seting',mustLoginAdmin, require('../controller/adminControll/AdminSeting'))


//img 
const upload = multer(
    { dest: path.join(__dirname, '../public/uploads') 
})

// loginAdmin
router.get('/loginAdmin', require('../controller/adminControll/loginAdmin'))
router.post('/postLoginAdmin', require('../controller/adminControll/postLoginAdmin'))

//loguot
router.get('/logOut', require('../controller/adminControll/logOutAdmin'))

//approve and dalete romm from user
router.get('/confirmApprove/:id/approve',mustLoginAdmin, require('../controller/adminControll/confirmApprove'))
router.get('/confirmDelete/:id/delete',mustLoginAdmin, require('../controller/adminControll/confirmDelete'))

//check reserve
router.get('/checkReserve',mustLoginAdmin, require('../controller/adminControll/checkReserve'))

//incom
router.get('/checkIncom',mustLoginAdmin, require('../controller/adminControll/checkIncom'))
//reserve
router.get('/reserveAdd',mustLoginAdmin, require('../controller/adminControll/reserveAdd'))
router.get('/reserve/:id/confirm',mustLoginAdmin, require('../controller/adminControll/reserveConfirm'))
router.post('/confirm/sucsess',mustLoginAdmin, require('../controller/adminControll/reserveConfirmSucsess'))
//manage room
router.get('/newRoom',mustLoginAdmin, require('../controller/adminControll/RoomNew'))
router.get('/:id/delete',mustLoginAdmin, require('../controller/adminControll/RoomDelete'))
router.post('/createRoom',upload.array('img',5), require('../controller/adminControll/RoomCreate'))
//router.delete('/deleteRoom/:id', require('../controller/adminControll/RoomCreate'))


module.exports = router