const Problem = require("../Model/Problems")

exports.addProblem = (req, res) => {
    const prob = new Problem
    ({
        ProblemsCategory:req.body.problemcategory,
        ProblemsDescription:req.body.problemdescription,
        ProblemsSampleInput:req.body.problemsampleinput,
        ProblemsSampleOutput:req.body.problemsampleoutput,
        ProblemsExplanation:req.body.problemexplanation,
        ProblemTitle:req.body.probtitle,
        ProblemCode:req.body.problemcode


    })
    prob.save().then((insertedProblem) => {
        res.status(200).json(insertedProblem)
    }).catch((err) => {
        res.status(500).json(err)
    });
}
exports.allProblem = (req, res) => {
    Problem.find().then((allProblem) => {
        res.status(200).json(allProblem)
    }).catch((err) => {
        res.status(500).json(err)
    });
}
exports.getProblemsByCate = (req, res) => {
    const category = req.body.problemcategory
    Problem
    .where("ProblemsCategory")
    .equals(category)
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        res.status(500).send(err)
    });
}
exports.getProblemById = (req, res) => {
    Problem.findById(req.body.id)
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        res.status(500).send(err)
    });
}
exports.DeleteProblemById =(req, res) =>{
    Problem.findByIdAndDelete(req.body.id)
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        res.status(500).send(err) 

        
    });
}