const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactsSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "The full name is a required field"],
    minLength: [6, "The full name minimum length is 6"],
  },
  email: {
    type: String,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid e-mail"],
  },
  phone: {
    type: String,
    minLength: 8,
    maxLength: 8,
  },
  birthDate: {
    type: String,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = Contact = mongoose.model("Contact", contactsSchema);