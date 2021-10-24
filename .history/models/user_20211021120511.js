const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullname: {
    type: String,
  },
  username: {
    type: String,
    default: 0,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;