const mongoose = require("mongoose")
const StudyMaterialSchema = mongoose.Schema({
    StudyMaterialCategory: String,
    StudyMaterialTitle: String,
    StudyMaterialFilePath: String,
    StudyMaterialCoverImage: String,

})
module.exports = mongoose.model("studymaterial",StudyMaterialSchema)