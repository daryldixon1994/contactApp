const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: [true, "The full name is a required field"],
    minLength: [6, "The full name minimum length is 6"],
  },
  email: {
    type: String,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid e-mail"],
  },
  password: {
    type: String,
    minLength: 8,
    match: [
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/,
      "Invalid password",
    ],
  },
  birthDate: {
    type: String,
  },
  
});

module.exports = User = mongoose.model("User", userSchema);
