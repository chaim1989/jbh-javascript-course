const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullname: {
    type: String,
  },
  username: {
    type: String,
    required: true,
  },
  password:
});

const User = mongoose.model("User", UserSchema);

module.exports = User;