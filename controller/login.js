const jwt = require("jsonwebtoken");
const User = require("../model/user");
require("dotenv").config();
const bcrypt = require("bcrypt");

const JWT_SECRET = process.env.SECRET;

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const userFind = await User.findOne({ username });

    if (!userFind) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const { password: hash, _id } = userFind;

    const match = await bcrypt.compare(password, hash);

    if (match) {
      const token = jwt.sign({ user: username, _id }, JWT_SECRET);

      return res.status(200).json({
        message: "Authentication Successful",
        token,
      });
    } else {
      return res.status(401).json({
        success:false,
        error: {
          code: 401,
          message: "Invalid email or password",
        },
      });
    }
  } catch (error) {
    console.log(`ERROR IS HAPPENING HERE ${error}`);
    return res
      .status(500)
      .json({ success: false, error, message: "Internal server error" });
  }
};

module.exports = login;
