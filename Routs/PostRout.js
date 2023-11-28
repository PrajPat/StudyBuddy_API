module.exports=(app) => {
    PostController = require("../Controller/PostController")

    app.get("/allpost",PostController.AllPost)
    app.post("/addpost",PostController.AddPost)
    app.post("/getpostbyid",PostController.getPostById)
    app.delete("/deletepost",PostController.DeletePost)
    app.post("/addcomm",PostController.AddComment)
}