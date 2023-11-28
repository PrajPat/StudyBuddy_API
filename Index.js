const express=require("express")
const mongoos= require("mongoose")
const bodyparser =require("body-parser")
const multer =require("multer")
const path = require("path")
const Cors = require("cors")

const app =express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))
app.use(Cors())

//Connecting Database
mongoos.connect("mongodb://127.0.0.1:27017/mystudybuddy",{
    useNewUrlparser: true
}).then((result) => {
    console.log("DataBase Connected")
}).catch((err) => {
    console.log("DataBase Not Connected")
});

//file Storage Configaration


const docStorage=multer.diskStorage({
    destination:"Document",
    filename:(req,file,cb)=>{
        cb(
            null,
            file.fieldname+"_"+Date.now()+path.extname(file.originalname)
        );
    },
});


const docUpload=multer({
    storage:docStorage,

    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(png|jpg|jpeg|jfif|pdf)$/)){
            return cb(new Error("Please upload a document..."));
        }
        cb(undefined,true)
    }

})

app.post("/uploaddoc",
         docUpload.single('docs'),
         (req,res)=>{
            res.status(200).json({filepath:"/document/".concat(req.file.filename),uploaded:true})
         },
         (err,req,res,next)=>{
            res.status(400).send({error:err.message})
         }
)

//image storage
const imageStorage = multer.diskStorage
({
    destination: "image",
    filename:(req, file, cb) => {
        cb(
            null,
            file.fieldname + " _" +Date.now() + path.extname(file.originalname)
        );
    },
});

//image upload configaration
const imageUpload = multer({
    storage: imageStorage,
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg|jiif|pdf)$/)) {
            return cb(new Error("please upload image.."));
        }
        cb(undefined, true);
    },
});


//file upload post req
app.post(
    "/uploadimage", 
    imageUpload.single("image"),
    (req, res) => {
        res
            .status(200)
            .json({ filepath: "/images/".concat(req.file.filename), uploaded: true });
    },
    (err, req, res, next) => {
        res.status(400).send({ error: err.message });
    }

);

app.use("/images",express.static("image"))
app.use("/document",express.static("Document"))

require("./Routs/ProblemsRout")(app)
require("./Routs/StudyMaterialRout")(app)
require("./Routs/UserRout")(app)
require("./Routs/ExerciseRout")(app)
require("./Routs/PostRout")(app)
require("./Routs/ContactRout")(app)
require("./Routs/CountRout")(app)

app.listen(5000, () => {
    console.log("Server Started")
})