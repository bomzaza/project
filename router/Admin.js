const express = require('express')
const multer  = require('multer')
const path = require('path')
const router = express.Router()

router.get('/', require('../controller/adminControll/AdminIndex'))
router.get('/check', require('../controller/adminControll/AdminCheck'))
router.get('/incom', require('../controller/adminControll/AdminImcom'))
router.get('/reserve',  require('../controller/adminControll/AdminReserve'))
router.get('/bill', require('../controller/adminControll/AdminBill'))
router.get('/seting', require('../controller/adminControll/AdminSeting'))


//img 
const upload = multer(
    { dest: path.join(__dirname, '../public/uploads') 
})

//incom
router.get('/checkIncom', require('../controller/adminControll/checkIncom'))
//reserve
router.get('/reserveAdd', require('../controller/adminControll/reserveAdd'))
router.get('/reserve/:id/confirm', require('../controller/adminControll/reserveConfirm'))
router.post('/confirm/sucsess', require('../controller/adminControll/reserveConfirmSucsess'))
//manage room
router.get('/newRoom', require('../controller/adminControll/RoomNew'))
router.get('/:id/delete', require('../controller/adminControll/RoomDelete'))
router.post('/createRoom',upload.single('img'), require('../controller/adminControll/RoomCreate'))
//router.delete('/deleteRoom/:id', require('../controller/adminControll/RoomCreate'))


module.exports = router