var http=require('http');

var product={
	name:"Chips",
	qty:5,
	price:20,
	company:"Haldiram"
};
var count=45;
count++;
var controller=function(request,response)
{
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.end(JSON.stringify(product));
};

var server=http.createServer(controller);
server.listen(4000);
console.log("listen on port 3000");
