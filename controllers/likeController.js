const Post = require("../models/postModel");
const Like = require('../models/likeModel');

exports.likePost = async(req,res)=>{
    try{
        const {post, user} = req.body;
        const like = new Like({
            post, user,
        });
        const savedLike = await like.save();

        //update the post collection
        const updatedPost = await Post.findByIdAndUpdate(post, {$push:{like: savedLike._id}}, {new:true})
        .populate("like").exec();

        res.json({
            post:updatedPost,
        }) ;

    }
    catch(err){
        return res.status(400).json({
            error:"error while fetching post",
        })

    }
}


exports.unlikePost = async (req, res)=>{
    try{
        const {post, like }= req.body;

        // find and delete the like collection 
        const deletedLike = await Like.findOneAndDelete({post:post, _id:like});

        //update the post collection
        const updatedPost = await Post.findByIdAndUpdate(post,{$pull: {like:deletedLike._id}}, {new:true});

        res.json({
            post:updatedPost,
        });

    }
    catch(err){
        return res.status(400).json({
            error:"Error while unliking post"
        })
    }
}