const { mongoose } = require("mongoose")
const {Schema } = mongoose;
const postSchema = new Schema({
    name: {type: String},
    location: {type: String},
    likes: {type: String},
    description: {type: String},
    PostImage: {type: String}, 
    date: {type: String},
    user: {type: Schema.Types.ObjectId, ref: "users_data"}
}, {timestamps: true})


const users_post = mongoose.model('users_post', postSchema);

module.exports = users_post;