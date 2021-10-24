const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    id:{
        type:Int,  
        required: true,
    },
    fullname: {
        type: String,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;