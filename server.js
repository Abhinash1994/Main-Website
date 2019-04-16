const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postdata = require('./routes/api/bloggingdata');
const commentdata = require('./routes/api/commentStore');
const app = express();

//body parser middleware

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
//DB config
const db = require('./config/keys').mongoURI;

mongoose.connect(db).then(()=>console.log('mongoDB connected'))
	.catch(err=>console.log(err));


app.get('/',(req,res)=>
	res.send("hi"));

//use routes
app.use('/api/blog',postdata);
app.use('/api/blog',commentdata);

app.listen(4000,function(){
	console.log("Server is running 4000")
});