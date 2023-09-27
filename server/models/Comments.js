const { mongoose, Schema } = require("mongoose");

const commentSchema = new Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

module.exports = commentSchema;
