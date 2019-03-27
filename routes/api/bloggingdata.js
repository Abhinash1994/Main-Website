const express = require('express');
const router = express.Router();
const path = require("path");
var multer  = require('multer');

const storage = multer.diskStorage({
	destination: function(req,file,cb){
		cb(null,'./uploads/');
	},
	filename: function(req,file,cb){
		cb(null,new Date().toString() +file.originalname);
	}
})
var upload = multer({storage: storage,limits:{
	fileSize: 1024 * 1024 * 5
}})

//load models bloggingdata
const blogData  = require('../../models/blogData')



router.get('/test',(req,res)=>{
	blogData.find().then((data)=>{
		res.send({data});
	}, (e) => {
		res.status(400).send(e);
	});
});

router.post('/checkpost',upload.single('blogImages'),(req,res)=>{
	var data = new blogData({
		title:req.body.title,
		categories:req.body.categories,
		comment:req.body.comment,
		createdAt:req.body.createdAt,
		// blogImages:req.file.path,
		author:req.body.author
	});

	data.save().then((doc)=>{
		res.send(doc);
	},(e)=>{
		res.status(400).send(e);
	})
})


module.exports = router;

