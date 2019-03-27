const express = require('express');
const router = express.Router();
require('dotenv').config()
const cloudinary = require('cloudinary');

require('../../models/cloudinary')
const blogData  = require('../../models/blogData')
const upload  = require('../../models/multer')


router.get('/test',(req,res)=>{
	blogData.find().then((data)=>{
		res.send({data});
	}, (e) => {
		res.status(400).send(e);
	});
});

router.post('/checkpost',upload.single('blogImages'), async (req,res)=>{
	const result = await cloudinary.v2.uploader.upload(req.file.path);
	var data = new blogData({
		title:req.body.title,
		categories:req.body.categories,
		comment:req.body.comment,
		createdAt:req.body.createdAt,
		blogImages:result.secure_url,
		author:req.body.author
	});

	data.save().then((doc)=>{
		res.send(doc);
	},(e)=>{
		res.status(400).send(e);
	})
})


module.exports = router;

