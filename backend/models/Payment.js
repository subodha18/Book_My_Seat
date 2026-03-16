const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  userId: String,
  bookingId: String,
  amount: Number,
  paymentMethod: String,
  transactionId: String,
  paymentDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Payment", paymentSchema);