const http = require('http')
fs = require('fs');

const host = '127.0.0.1';
const port = 3000;

http.createServer(function(req,res){

	fs.readFile('./index.html',function(err,html){
		if(err){
			throw(err);
		}
		res.writeHeader(200,{'Content-Type':'text/html'});
		res.write(html);
		res.end();
	})

}).listen(port);

console.info('-- server started on '+ host +':'+ port +' --');
