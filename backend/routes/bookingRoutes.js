const express = require('express');
const router = express.Router();

const controller = require('../controllers/bookingController');

router.post('/bookSeat', controller.bookSeat);
router.get('/userBookings/:userId', controller.userBookings);

module.exports = router;