const mongoose = require("mongoose") 
const UserSchema = mongoose.Schema({

    Name:String,
    Email: String,
    MobileNo: Number,
    Password: String,
    User_type_id: Number
})

module.exports = mongoose.model("user",UserSchema)