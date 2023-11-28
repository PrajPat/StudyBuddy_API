const mongoose = require("mongoose")
const PostSchema = mongoose.Schema({

    PostCoverImage: String,
    PostTitle :String,
    PostDescription : String,
    PostComment: [{ user:{ type: mongoose.Schema.Types.ObjectId, ref: "user" }, Comment: String}]
})
module.exports = mongoose.model("post",PostSchema)