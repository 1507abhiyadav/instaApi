// //import
const express = require('express');
const { redirect } = require('express/lib/response');
const router = express.Router();
const users_post = require('../module/postSchema');

const { upload, uploadImage } = require('./userController');

router.post("/upload", uploadImage, upload);

  router.get("/posts", async (req, res) =>{       //fetching all the post created
    const post = await users_post.find({user: req.user}); //{user: req.user} - will give post by sepcific user
    res.json({
        status: "success",
        post
    });
    
})

module.exports = router;