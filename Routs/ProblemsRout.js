module.exports=(app) => {
    ProblemsController=require("../Controller/ProblemsController")

    app.get("/allproblem",ProblemsController.allProblem)
    app.post("/addproblem",ProblemsController.addProblem)
    app.post("/getproblembycate",ProblemsController.getProblemsByCate)
    app.post("/getproblembyid",ProblemsController.getProblemById)
    app.delete("/deleteprobbyid",ProblemsController.DeleteProblemById)
}