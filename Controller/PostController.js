const Post = require("../Model/Post")

exports.AddPost = (req, res) => {
    const post = new Post({
        PostCoverImage:req.body.postcoverimg,
        PostTitle:req.body.posttitle,
        PostDescription:req.body.postdescrition,
        PostComment:req.body.userid

    })
    post.save().then((insertedPost) => {
        res.status(200).json(insertedPost)
    }).catch((err) => {
        res.status(500).json(err)
    });

}

exports.AllPost = (req, res) => {
    Post.find().then((allpost) => {
        res.status(200).json(allpost)
    }).catch((err) => {
        res.status(500).json(err)
    });
}

exports.getPostById =(req, res) => {
    Post.findById(req.body.id)
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        res.status(500).send(err)
    });
}

exports.DeletePost =(req, res) => {
    Post.findByIdAndDelete(req.body.id)
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        res.status(500).json(err)
    });
}

exports.AddComment = (req, res) => {
    Post.findOneAndUpdate({_id:req.body._id},{ $push: {PostComment:req.body.Comment}},{new:true})
    
    .then((post) => {
        res.status(200).json(post)
    }).catch((err) => {
        res.status(500).json(err)
    })
}