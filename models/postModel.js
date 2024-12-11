const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        require:true,
    },
    like:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like"
    }],
    comment:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    }]
})


module.exports= mongoose.model("Post",postSchema)