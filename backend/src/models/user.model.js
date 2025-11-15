const mongoose = require('mongoose');

// Document of a single user; [Document == Schema]
// what type of data we want to store for each user;
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    }
},  
    {
        timestamps: true,
    }
)

//collection of users; [Model == Collection]
const userModel = mongoose.model("user", userSchema);

module.exports = userModel;