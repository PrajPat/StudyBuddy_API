module.exports=(app) => {

 
StudyMaterialController = require("../Controller/StudyMaterialController")

app.get("/allstudymaterial",StudyMaterialController.AllStudyMaterial)
app.post("/addstudymaterial",StudyMaterialController.AddStudyMaterial)
app.get("/studymatebycate",StudyMaterialController.getStudyMaterialByCate)
app.get("/getstudymbyid",StudyMaterialController.getStudyMaterialById)
app.delete("/deletebystudymbyid",StudyMaterialController.DeleteStudyMById)
}