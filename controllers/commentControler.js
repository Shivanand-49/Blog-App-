const post = require("../models/postModel");
const comment = require("../models/commentsModel");

exports.createComment = async(req,res)=>{

    try{
            //fetch data from request body
        const{post, user, body} = req.body;
        // create a comment object
        const comment = new Comment({
            post, user, body
        });

        //save the new comment into the database
        const savedComment = await comment.save();

        //find the post by ID and add the new comment to its comments array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push:{comments: savedComment._id}}, {new:true})
        .populate("comments") //populate the comment array with comment documents
        .exec();

        res.json({
            post:updatedPost,
        })

    }
    catch(err){
        return res.status(400).json({
            error:"Error while Creating Post",
        })
    }
    

}