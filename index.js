const http = require('http');

const server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
  	res.end('okay');
});

http.get('http://localhost:3000', (res) => {
	console.log('Hello Anil');
});

server.listen(3000,()=>{
	console.log('Server running on port 3000');
});