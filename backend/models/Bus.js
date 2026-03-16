const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
  ownerName: String,
  busNo: String,
  busName: String,
  Bustype:{
    type:String,
    enm:["Ac","Non Ac"],
    default:"Non Ac"
  },
  Seats:Number,
  state:String
});

module.exports = mongoose.model("BusData", busSchema);