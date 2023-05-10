const express = require('express')
const router = express.Router()
const mustLoginUsers = require('../middlewares/mustLoginUsers')

//link menu
router.get('/', require('../controller/UserController/UsersIndex'))
router.get('/UsersService', require('../controller/UserController/UsersService'))
router.get('/Userconnect', require('../controller/UserController/Userconnect'))
router.get('/UserLogin', require('../controller/UserController/UserLogin'))
router.get('/UserRegister', require('../controller/UserController/UserRegister'))

router.get('/UsersHistory', require('../controller/UserController/UsersHistory'))
router.post('/Login', require('../controller/UserController/UserLogin2'))
router.post('/Register', require('../controller/UserController/UsersRegister2'))
router.get('/UsersLogout', require('../controller/UserController/UsersLogout'))

router.get('/UserCheckRoom', require('../controller/UserController/UserCheckRoom'))
router.get('/UserReserveRoom',mustLoginUsers, require('../controller/UserController/UserReserveRoom'))
router.post('/UsersReserveSucsess',mustLoginUsers, require('../controller/UserController/UsersReserveSucsess'))

module.exports = router