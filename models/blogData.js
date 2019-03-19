const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BloggingSchema = new Schema({

	name:{
		type:String,
		
	},
	paragraph:{
		type:String
	},
	address:{
		type:String
	},

})

module.exports = blogData = mongoose.model('bloggingdata',BloggingSchema);