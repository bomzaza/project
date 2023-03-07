const express = require('express')
const router = express.Router()

router.get('/', require('../controller/UserController/UserIndex'))

module.exports = router