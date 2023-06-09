const express = require('express')
const router = express.Router()

//controller
const AuthController = require('../controllers/AuthController')

router.get('/login', AuthController.login)
router.get('/register', AuthController.register)
router.post('/register', AuthController.registerPost)
router.get('/logout', AuthController.logoutUser)
router.post('/login', AuthController.loginPost)
//ok


module.exports = router