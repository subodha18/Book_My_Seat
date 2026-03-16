const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema({
  name:{
    type:String
  },
  email:{
    type:String
  },
  password:{
    type:String
  }
});

module.exports = mongoose.model("Owner", ownerSchema);