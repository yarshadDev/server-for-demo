const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const ObjectId = Schema.ObjectId;

const userPostSchema = new Schema({
  userId: { type: ObjectId, required: true },
  post: { type: String },
});

const userPostModel = model("userPosts", userPostSchema);

module.exports = userPostModel;
