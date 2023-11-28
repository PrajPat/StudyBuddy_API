module.exports =(app) => {
    ExerciseController = require("../Controller/ExerciseController")

    app.get("/allexercise",ExerciseController.AllExercise)
    app.post("/addexercise",ExerciseController.AddExercise)
    app.delete("/deleteexercise",ExerciseController.DeleteExercise)
    app.post("/getexerbylang",ExerciseController.getExerciseByLanguage)
    app.get("/getexercisebyid",ExerciseController.getExerciseById)
}