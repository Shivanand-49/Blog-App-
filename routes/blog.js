const express = require('express');
const router = express.Router();

//import controller

const {dummy} = require("../controllers/dummy");
const {createComment} = require("../controllers/commentControler");
const {createPost} = require("../controllers/PostControler");


//mapping create
router.get("/dummyroute", dummy);
router.post("/comments/create", createComment);
router.post("/posts/create",createPost)

// export
module.exports = router;