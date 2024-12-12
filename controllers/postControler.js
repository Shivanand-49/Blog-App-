const Post = require("../models/postModel");

exports.createPost = async(req, res)=>{
    try{
        const{ title, body} = req.body;
        const post = new Post({
            title, body,
        });
        const savePost = await post.save();

        res.json({
            post:savePost
        })
    }
    catch(err){
        return res.status(400).json({
            error:"Error while Creating Post",
        })

    }
}

exports.getAllPost = async(req, res) =>{
    try{
        // const post = await post.find()// fetched all id 

        const posts = await Post.find().populate("comment").exec();
        res.json({
            posts
        })

    }
    catch(err){
        return res.status(400).json({
            error:"Error while fetching post"
        });
    }

}