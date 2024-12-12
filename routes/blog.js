const express = require('express');
const router = express.Router();

//import controller

const {createComment} = require("../controllers/commentControler");
const {createPost,getAllPost} = require("../controllers/PostControler");
const {likePost, unlikePost} = require("../controllers/likeController");


//mapping create

router.post("/comments/create", createComment);
router.post("/posts/create",createPost);
router.get("/posts",getAllPost);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);

// export
module.exports = router;