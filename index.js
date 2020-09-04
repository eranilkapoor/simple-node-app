const http = require('http');

const server = http.createServer((req, res) => {
	if(req.method === 'GET' && req.url === '/'){
		res.statusCode = 200;
  		res.setHeader('content-Type', 'Application/json');
		res.end('Hello Anil');
	}

	if(req.method === 'GET' && req.url === '/api'){
		res.statusCode = 200;
  		res.setHeader('content-Type', 'Application/json');
		res.end('Hello Api');
	}
});

server.listen(3000,()=>{
	console.log('Server running on port 3000');
});