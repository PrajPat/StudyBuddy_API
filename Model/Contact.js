const mongoose = require("mongoose") 
const ContactSchema = mongoose.Schema({

    Name:String,
    Email: String,
    Comment: String
})

module.exports = mongoose.model("contact",ContactSchema)