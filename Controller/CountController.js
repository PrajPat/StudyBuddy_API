const Post = require("../Model/Post");
const Exercise = require("../Model/Exercise");
const Problems = require("../Model/Problems");
const StudyMaterial = require("../Model/StudyMaterial");

exports.getPostCount = (req, res) => {
    Post.countDocuments()
        .then((pbcnt) => {
            res.status(200).json({ blogsCount: pbcnt })
        })
        .catch((err) =>
            res.status(500).send(err))
};
exports.getExcersisecount = (req, res) => {
    Exercise.countDocuments()
    .then((excnt) => {
        res.status(200).json({Exercisecount: excnt})
    }).catch((err) => {
        res.status(500).send(err)
    })
}

exports.getProblemscount = (req, res) => {
    Problems.countDocuments()
    .then((prbcnt) => {
        res.status(200).json({Problemscount: prbcnt})
    }).catch((err) => {
        res.status(500).send(err)
    })
}

exports.getStudyMcount = (req, res) => {
    StudyMaterial.countDocuments()
    .then((studymcnt) => {
        res.status(200).json({StudyMcount: studymcnt})
    }).catch((err) => {
        res.status(500).send(err)
    })
}