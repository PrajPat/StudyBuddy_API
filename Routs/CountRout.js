module.exports = (app) => {
    const CountController = require("../Controller/CountController");

    app.get("/getpostcount", CountController.getPostCount);
    app.get("/excersisecount",CountController.getExcersisecount);
    app.get("/problemscount",CountController.getProblemscount);
    app.get("/studymcount",CountController.getStudyMcount)
}