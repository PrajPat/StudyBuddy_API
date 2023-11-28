const bcrypt = require("bcryptjs")
const User = require("../Model/User")
const jwt = require("jsonwebtoken")
const config = require("../config/config")


exports.AddUser = async (req, res) => {
  const salt = await bcrypt.genSalt(10)
  const hashpass = await bcrypt.hash(req.body.pass, salt)
  const existinguser = await User.findOne({ Email: req.body.email })
  if (existinguser) {
    res.status(401).send("Email Already exist")
  }
  else {
    const user = new User({
      Name: req.body.name,
      Email: req.body.email,
      MobileNo: req.body.mobileno,
      User_type_id: req.body.utid,
      Password: hashpass
    })

    user.save().then((registerduser) => {
      let payload = { id: registerduser._id, utid: req.body.utid || 0 }
      const token = jwt.sign(payload, config.TOKEN_SECRET)
      console.log("token genrated")
      console.log()
      res.status(200).json({ token, registerduser })
    }).catch((err) => {
      res.status(500).json(err)
    });
  }
}
exports.AllUser = (req, res) => {
  User.find().then((AllUser) => {
    res.status(200).json(AllUser)
  }).catch((err) => {
    res.status(500).json(err)
  });
}

exports.login = (req, res) => {
  User.findOne({ Email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).send("Invalid email/mobile");
      }

      bcrypt.compare(req.body.pass, user.Password)
        .then((validPass) => {
          if (!validPass) {
            return res.status(401).json( "Mobile/Email or Password is wrong" );
          }
          let payload = { id: user._id, utid: user.User_type_id };
          const token = jwt.sign(payload, config.TOKEN_SECRET);
          res.status(200).send({ token, user })
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.userEvent = (req, res) => {
  let events = [
    {
      "_id": "1",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "2",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "3",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    }
  ]
  res.json(events)
  return ("..return succefully")
};

exports.adminEvent = (req, res) => {
  let specialEvents = [
    {
      "_id": "1",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "2",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "3",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "4",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "5",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "6",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    }
  ]
  res.json(specialEvents)

}





exports.getUserByEmailAndPass = (req, res) => {
  const email = req.body.email
  const pass = req.body.password
  User
    .where("Email")
    .equals(email)
    .where("Password")
    .equals(pass)
    .then((result) => {
      res.status(200).json(result)
    }).catch((err) => {
      res.status(500).send(err)
    });
}
exports.getUserById = (req, res) => {
  User.findById(req.body.id)
    .then((result) => {
      res.status(200).json(result)
    }).catch((err) => {
      res.status(500).send(err)
    });
}
exports.deleteUserById = (req, res) => {
  User.findByIdAndDelete(req.body.id)
    .then((result) => {
      res.status(200).json(result)
    }).catch((err) => {
      res.status(500).send(err)
    });
}