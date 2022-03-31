const mongoose = require("mongoose");
const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
var methodOverride = require('method-override');
const loginRoutes = require("./routers/login")
const post = require('./module/postSchema')
const postRoutes = require("./routers/post");
const jwt = require('jsonwebtoken');
const res = require("express/lib/response");
const SECRET = "RESTAPI";
const fs = require('fs');

const app = express();
const PORT_API = 5000
const port = process.env.PORT || PORT_API;

app.set('views', './views');
app.set('view engine', 'ejs');

const url = "mongodb+srv://abhishek:Abhishek%40123@insta-clone.gfvhi.mongodb.net/instaabhi?retryWrites=true&w=majority";
mongoose.connect(url);


app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public'))
app.use(methodOverride('_method'))


const whitelist =[
    "http://localhost:3000"
]

app.use(cors({
    origin:(origin,callback)=>{
        if (whitelist.indexOf(origin)!==-1||!origin){
            callback(null,true)
        }else{
            callback(new Error("Not allowed"))
        }
    },optionsSucsessStatus:200
}))

app.use("/api", loginRoutes);
app.use("/api", postRoutes)

app.listen(port, () => console.info(`sever is running on port ${port}`))
