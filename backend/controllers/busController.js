const Bus = require("../models/Bus");

exports.addBus = async (req, res) => {

  const { ownerName,busNo,busName,Bustype ,Seats,state} = req.body;

  const Busdata = new Bus({
    ownerName,busNo,busName,Bustype,Seats,state
  });
  await Busdata.save();

  res.json(Busdata);
};


exports.getBuses = async (req, res) => {

  const buses = await Bus.find({});

  res.json(buses);
};