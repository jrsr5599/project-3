const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/left-on-scene");

module.exports = mongoose.connection;
