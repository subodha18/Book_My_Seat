const express = require('express')
const router = express.Router()

const bus = require('../controllers/busController')

router.post('/addBus',bus.addBus)
router.get('/getBus',bus.getBuses)

module.exports= router