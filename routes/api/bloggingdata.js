const express = require('express');
const router = express.Router();

//load models bloggingdata
const blogData  = require('../../models/blogData')



router.get('/test',(req,res)=>{
	blogData.find().then((data)=>{
		res.send({data});
	}, (e) => {
		res.status(400).send(e);
	});
});

router.post('/check',(req,res)=>{
	var data = new blogData({
		name:req.body.name,
		paragraph:req.body.paragraph,
		address:req.body.address
	});

	data.save().then((doc)=>{
		res.send(doc);
	},(e)=>{
		res.status(400).send(e);
	})
})


module.exports = router;

