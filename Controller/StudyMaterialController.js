const StudyMaterial = require("../Model/StudyMaterial")

exports.AddStudyMaterial = (req,res) => {
    const studyM = new StudyMaterial({
        StudyMaterialCategory:req.body.studymaterialcategory,
        StudyMaterialTitle:req.body.studymaterialtitle,
        StudyMaterialFilePath:req.body.studymaterialfilepath,
        StudyMaterialCoverImage:req.body.studymaterialcoverimg
    })

    studyM.save().then((insertedStudyMaterial) => {
        res.status(200).json(insertedStudyMaterial)
    }).catch((err) => {
        res.status(500).json
    });
}
exports.AllStudyMaterial = (req, res) => {
    StudyMaterial.find().then((AllStudyMaterial) => {
        res.status(200).json(AllStudyMaterial)
    }).catch((err) => {
        res.status(500).json(err)
    });

}
exports.getStudyMaterialByCate =(req, res) => {
    const cate = req.body.studymaterialcategory
    StudyMaterial
               .where("StudyMaterialCategory")
               .equals(cate)
               .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        res.status(500).send(err)
    })
}
exports.getStudyMaterialById = (req, res) => {
    StudyMaterial.findById(req.body.id)
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        res.status(500).send(err)
    });
}
exports.DeleteStudyMById =(req, res) => {
    StudyMaterial.findByIdAndDelete(req.body.id)
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        res.status(500).send(err)
    });
    
}
