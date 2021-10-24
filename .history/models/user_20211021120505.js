const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    default: 0,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;