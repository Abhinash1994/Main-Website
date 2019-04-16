const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({

	name:{
		type:String,
		required:true
		
	},
	gmail:{
		type: String,
		required:true
	},
	comment:{
		type:String,
		required:true
	},
	
})

module.exports = commentDataStore = mongoose.model('commentData',CommentSchema);