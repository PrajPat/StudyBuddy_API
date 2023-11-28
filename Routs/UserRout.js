module.exports =(app) => {
    UserController= require("../Controller/UserController")
    const { verifyusertoken, IsUser, IsAdmin } = require("../middleware/Auth")

    app.get("/allregi",UserController.AllUser)
    app.post("/addregister",UserController.AddUser)

    app.post("/login",UserController.login)

    app.get("/isclient", verifyusertoken, IsUser, UserController.userEvent)
    app.get("/isadmin", verifyusertoken, IsAdmin, UserController.adminEvent )
    app.get("/getuserbyemailnpass",UserController.getUserByEmailAndPass)
    app.get("/getuserbyid",UserController.getUserById)
    app.delete("/deleteuserbyid",UserController.deleteUserById)
}