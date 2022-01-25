const Comment = require('../models/comment.model')

// Add Comment
exports.addComment = async (req, res) => {
    try {
        const newComment = new Comment();
        newComment.content = req.body.content
        newComment.postid = req.body.postid

        // If have real token, will get userid by this way > const userid = req.user.id
        // in this case because i dont have real data token to extract userid  
        // I will use req.body.userid as sample data
        newComment.userid = req.body.userid  
        await newComment.save()
            .then(() => res.status(201).json({
                newComment,
                message: "Comment is posted.",
                success: true,
            }))
    } catch (error) {
        res.status(409).send("Happen error. Check and try again." +error);
    }
}

// Get All Comment of PostId
exports.getAllCommentsOfPost = async (req, res) => {
    try {
        let postId = req.params.pId
        const comments = await Comment.find({ "postid": postId })
        if (comments.length == 0) {
            res.status(200).json("This post have no comment or postId not exist.")
            return;
        }
        res.status(200).json(comments);
    } catch (error) {
        res.status(409).send("Happen error. Check and try again." +error);
    }
}