const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const movieSchema = require("./Movie");
const reviewSchema = require("./Reviews");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address!"],
    },
    password: {
      type: String,
      required: true,
    },
    savedMovies: [movieSchema],
    reviews: [reviewSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password for privacy and security
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// count the number of movies saved within the savedMovies list
userSchema.virtual("movieCount").get(function () {
  return this.savedMovies.length;
});

const User = model("Users", userSchema);

module.exports = User;
