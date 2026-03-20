const express = require('express');
const router = express.Router();

const controller = require('../controllers/paymentController');

router.post('/addPayment', controller.addPayment);
router.get('/userPayments/:userId', controller.userPayments);

module.exports = router;
