const router = require('express').Router()
const commentController = require("../controllers/commentController");
const { identityUser } = require("../middlewares/indentityUser")
const { checkPost } = require ('../middlewares/checkPost');

router.post("/", identityUser, checkPost, commentController.addComment);

router.get("/comments-post/:pId", identityUser, checkPost, commentController.getAllCommentsOfPost)

module.exports = router
