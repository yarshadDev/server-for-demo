const jwt = require("jsonwebtoken");
const userPostModel = require("../model/userPost");
require("dotenv").config();

const JWT_SECRET = process.env.SECRET;

const userdata = async (req, res) => {
  const { token } = req.body;
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const { user,_id } = decoded;
    const result = await userPostModel.find({ userId: _id });

    if (result.length > 0) {
      return res.status(200).json({
        user,
        success: true,
        message: "User posts retrieved successfully.",
        data: result,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "No user posts found.",
      });
    }
  } catch (error) {
    console.log(`Error in verifying the token: ${error}`);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

module.exports = userdata;
