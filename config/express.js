 
    var express=require("express"),
    bodyParser=require("body-parser")

	
	module.exports=function(){
		
		var app=express();
		app.use(bodyParser.urlencoded({
			extended:true
		}));
		
		app.use(bodyParser.json());

		

		app.use(function(req, res, next) {
			res.header("Access-Control-Allow-Origin", "*");
			res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
			next();
		});

		app.use(express.static("./public"));
		app.get('/',function(req,res)
		{
			res.sendFile("./public/index.html")
		})
		require("../route/homepage.server.route.js")(app);
	
			
		return app;
	};

		

		

		

		