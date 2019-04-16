const express = require('express');
const router = express.Router();
const path = require("path");

const commentDataStore =require('../../models/commentDataStore')


router.get('/comment',(req,res)=>{
	commentDataStore.find().then((data)=>{
		res.send({data});
	}, (e) => {
		res.status(400).send(e);
	});
});


router.post('/comment',(req,res)=>{
	var data = new commentDataStore({
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

