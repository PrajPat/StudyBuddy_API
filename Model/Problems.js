const mongoose = require("mongoose")
const ProblemsSchema = mongoose.Schema
({
    ProblemsCategory: String,
    ProblemsDescription: String,
    ProblemsSampleInput: String,
    ProblemsSampleOutput:String,
    ProblemsExplanation: String,
    ProblemTitle:String,
    ProblemCode: String
})
module.exports=mongoose.model("Problems",ProblemsSchema)