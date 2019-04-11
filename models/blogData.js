const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const BloggingSchema = new Schema({

	title:{
		type:String,
		required:true
		
	},
	categories:{
		type: String,
		required:true
	},
	body:{
		type:String,
		required:true
	},
	paragraph:{
		type:String,
		required:true
	},
	createdAt: { 
		type: Date, default: Date,
	},
	blogImages:{
		type: String,
		
	},

	author:{
		type: String,
		required:true
	},
	slug:{
		type: String,
		required:true
	},
	tag:{
		type: String,
		required:true
	},
})
BloggingSchema.plugin(mongoosePaginate);
module.exports = blogData = mongoose.model('bloggingdata',BloggingSchema);