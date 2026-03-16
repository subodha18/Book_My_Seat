const Booking = require("../models/Booking");

exports.bookSeat = async (req, res) => {

  const booking = new Booking(req.body);

  await booking.save();

  res.json(booking);
};

exports.userBookings = async (req, res) => {

  const bookings = await Booking.find({ userId: req.params.userId });

  res.json(bookings);
};