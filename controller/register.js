const user = require("../model/user");
require("dotenv").config();
const bcrypt = require("bcrypt");

const saltRounds = 10;

const register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPass = await bcrypt.hash(password, salt);

    const user1 = new user({
      username,
      password: hashedPass,
    });
    await user1.save();
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user1,
    });
  } catch (error) {
    console.log(`We have an error ${error}`);
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the user.",
      error: error,
    });
  }
};

module.exports = register;
