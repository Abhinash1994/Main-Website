const express = require('express');
const router = express.Router();
const path = require("path");

const commentdata =require('../../models/commentData')


router.get('/comment',(req,res)=>{
	commentdata.find().then((data)=>{
		res.send({data});
	}, (e) => {
		res.status(400).send(e);
	});
});


router.post('/comment-data',(req,res)=>{
	var data = new commentdata({
		name:req.body.name,
		gmail:req.body.gmail,
		comment:req.body.comment
	});
	console.log("successful",data)
	data.save().then((doc)=>{
		res.send(doc);
	},(e)=>{
		res.status(400).send(e);
	})
})



module.exports = router;

