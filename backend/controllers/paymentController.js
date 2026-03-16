const Payment = require("../models/Payment");

exports.addPayment = async (req, res) => {

  const payment = new Payment(req.body);

  await payment.save();

  res.json(payment);
};

exports.userPayments = async (req, res) => {

  const payments = await Payment.find({ userId: req.params.userId });

  res.json(payments);
};