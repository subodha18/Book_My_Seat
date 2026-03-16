const express = require('express')
const router = express.Router()

const controller = require('../controllers/ownerController')

router.post('/register',controller.register)
router.post('/Login',controller.login)

module.exports= router