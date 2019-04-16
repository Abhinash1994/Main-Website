const express = require('express');
const router = express.Router();
const path = require("path");
const multer = require("multer");

require('dotenv').config()
const cloudinary = require('cloudinary');

require('../../models/cloudinary')
const blogData  = require('../../models/blogData')
const upload  = require('../../models/multer')


router.get('/test',(req,res)=>{
	const { page, perPage } = req.query;
      const options = {
        page: parseInt(page, 10),
        sort: {'_id': -1},
        
    }
	blogData.paginate({},options).then((data)=>{
		res.send({data});
	}, (e) => {
		res.status(400).send(e);
	});
});

router.get('/test/data/:id',(req,res)=>{
	blogData.findById(req.params.id).then((data)=>{
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
		body:req.body.body,
		paragraph:req.body.paragraph,
		createdAt:req.body.createdAt,
		blogImages:result.secure_url,
		author:req.body.author,
		slug:req.body.slug,
		tag:req.body.tag,
	});
	console.log("final",data)
	data.save().then((doc)=>{
		res.send(doc);
	},(e)=>{
		res.status(400).send(e);
	})
})


module.exports = router;

