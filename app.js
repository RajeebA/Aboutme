"use strict";
var express=require("./config/express");

var app=express();


var server=app.listen(3001,function()
{
	var port=server.address().port;
	console.log("port 3001 running !!!!!");
	
});

module.export={
	app:app,
	server:server
};
