const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postdata = require('./routes/api/bloggingdata');
const commentdata = require('./routes/api/commentStore');
const path = require('path');
const app = express();

var fs = require('fs');
var https = require('https');
var privateKey  = fs.readFileSync('/etc/letsencrypt/live/beyondtechz.com/privkey.pem', 'utf8');
var certificate = fs.readFileSync('/etc/letsencrypt/live/beyondtechz.com/fullchain.pem', 'utf8');

var credentials = {key: privateKey, cert: certificate};
//body parser middleware

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json());
//DB config
const db = require('./config/keys').mongoURI;

mongoose.connect(db).then(()=>console.log('mongoDB connected'))
	.catch(err=>console.log(err));


//app.get('/',(req,res)=>
//	res.send("hi"));

//use routes
app.use('/api/blog',postdata);
app.use('/api/blog',commentdata);


//Server static assets if in production

//if(process.env.NODE_ENV === 'production'){

	//set static folder

	app.use(express.static('client/build'));

	app.get('*',(req,res) => {

		res.sendFile(path.resolve(__dirname,'client','build','index.html'))

	})

//}

var httpsServer = https.createServer(credentials,app);
httpsServer.listen(443,function(){
	console.log("Server is running 443")
});

var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
    res.end();
}).listen(80);
