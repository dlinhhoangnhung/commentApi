const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    postid: {
        type: String,
        required: true
    },
    userid: {
        type: String,
        required: true
    },
    parendid: { type: String } // have value when user reply another comment
},
    {
        timestamps: true
    });

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;