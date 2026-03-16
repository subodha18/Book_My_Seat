const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

require("dotenv").config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

const user = require('./routes/authRoutes')
const owner = require('./routes/ownerRoute')
const Bus = require('./routes/busRoutes')

app.use("/api/user", user);
app.use('/api/owner',owner)
app.use('/api/Bus',Bus)
// app.use("/api/bus", require("./routes/busRoutes"));
// app.use("/api/booking", require("./routes/bookingRoutes"));
// app.use("/api/payment", require("./routes/paymentRoutes"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
