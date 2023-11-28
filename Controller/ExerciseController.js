const Exercise = require("../Model/Exercise")

exports.AddExercise = (req, res) => {
    const exercise = new Exercise({
        ExerciseNote:req.body.exercisenote,
        ExerciseSnippet:req.body.exercisesnippet,
        Language:req.body.language,
        OptionA:req.body.optiona,
        OptionB:req.body.optionb,
        OptionC:req.body.optionc,
        OptionD:req.body.optiond,
        SnippetAns:req.body.snippetans
    })

    exercise.save().then((insertedExercise) => {
        res.status(200).json(insertedExercise)
    }).catch((err) => {
        res.status(500).json(err)
    });
}

exports.AllExercise = (req, res) => {
    Exercise.find().then((AllExercise) => {
        res.status(200).json(AllExercise)
    }).catch((err) => {
        res.status(500).json(err)
    });
}

exports.DeleteExercise = (req, res) => {
    Exercise.findByIdAndDelete(req.body._id) 
    .then((result) => {
        res.status(200).json(result)
    }).catch((err ) => {
        res.status(500).json(err)
    });
}

exports.getExerciseByLanguage =(req, res) => {
    const laguage = req.body.language
    Exercise
            .where("Language")
            .equals(laguage)
            .then((result) => {
                res.status(200).json(result)
            }).catch((err) => {
                res.status(500).send(err)
            });
}
exports.getExerciseById = (req, res) => {
    Exercise.findById(req.body.id)
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        res.status(500).send(err)
    });
}