const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: String,
  busId: String,
  seats: [String],
  totalPrice: Number,
  bookingDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Booking", bookingSchema);