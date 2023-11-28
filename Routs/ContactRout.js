module.exports =(app) => {
    ContactController= require("../Controller/ContactController")

    app.get("/allcontact",ContactController.AllContact)
    app.post("/addcontact",ContactController.AddContact)
    app.delete("/deletecontactbyid",ContactController.deleteContactById)
}