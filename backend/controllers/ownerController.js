const owner = require("../models/owner");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const ownerdata = new owner({
      name,
      email,
      password: hashedPassword,
    });

    await ownerdata.save();

    res.json({ message: "Owner Registered Successfully" });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


exports.login = async (req, res) => {
  try {

    const { email, password } = req.body;

    const Owner = await owner.findOne({ email });

    if (!Owner) {
      return res.status(404).json({ message: "Owner not found" });
    }

    const valid = await bcrypt.compare(password, Owner.password);

    if (!valid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: Owner._id }, "secret");

    res.json({
      token,
      message: "Owner login successfully 🎉",
      user: { _id: Owner._id, name: Owner.name, email: Owner.email }
    });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
    console.log(error)
  }
};