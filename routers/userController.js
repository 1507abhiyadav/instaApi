const multer = require('multer');
const post = require('../module/postSchema');
const multerConfig = multer.diskStorage({
    destination :(req,file,callback) =>{
        callback(null, 'public/');
    },
    filename :(req,file,callback) =>{
        callback(null, file.originalname);
    },
});



const upload = multer({
    storage :multerConfig,

});

exports.uploadImage = upload.single('photo')

exports.upload = (req, res) =>{
    console.log(req.file);
    console.log(req.body);
    post.create({
        name: req.body.name,
        location: req.body.location,
        description: req.body.description,
        PostImage: req.file.filename 
        
    })
    res.status(200).json({
        status: "success"
    });
}; 