const mongoose = require("mongoose");


const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: { type: String, lowercase:true ,required: true, unique: true },
  password: { type: String },
});

const userModel = model("users", userSchema);


module.exports = userModel;