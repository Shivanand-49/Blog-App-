const CommentModel = require("../models/commentsModel");

exports.createComment = async (req, res) => {
    try {
        const { post, user, body } = req.body;

        // Create a comment object
        const comment = new CommentModel({ post, user, body });

        // Save the new comment into the database
        const savedComment = await comment.save();

        // Find the post by ID and add the new comment to its comments array
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $push: { comments: savedComment._id } },
            { new: true }
        )-
            .populate("comments")
            .exec();

        res.json({
            post: updatedPost,
        });
    } catch (err) {
        return res.status(400).json({
            error: "Error while Creating Post",
        });
    }
};
