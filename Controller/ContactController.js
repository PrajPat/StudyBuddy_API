const Contact = require("../Model/Contact")

exports.AddContact = (req, res) => {
    const contact = new Contact({
        Name:req.body.name,
        Email:req.body.email,
        Comment:req.body.comment
    })

    contact.save().then((insertedContact) => {
        res.status(200).json(insertedContact)
    }).catch((err) => {
        res.status(500).json(err)
    });
}
exports.AllContact = (req, res) => {
    Contact.find().then((AllContact) => {
        res.status(200).json(AllContact)
    }).catch((err) => {
        res.status(500).json(err)
    });
}


exports.deleteContactById = (req, res) => {
    Contact.findByIdAndDelete(req.body.id)
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        res.status(500).send(err)
    });
}