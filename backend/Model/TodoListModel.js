const {model , Schema} = require("mongoose")

const PostSchema = new Schema({
    list:String,
    isDone:Boolean,
    Date:Date,
});


const PostModel= model("Post" , PostSchema);

module.exports = PostModel;