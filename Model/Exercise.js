const mongoose = require("mongoose")
const ExerciseSchema = mongoose.Schema({

    ExerciseNote: String,
    ExerciseSnippet: String,
    Language:String,
    OptionA :String,
    OptionB :String,
    OptionC :String,
    OptionD :String,
    SnippetAns : String,


})
module.exports = mongoose.model("exercise",ExerciseSchema)