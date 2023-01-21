const http = require('node:http');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  console.log('here is request from server1: ');
  res.end('bla bla')
})


server.listen(7002, () => {
  console.log('server 2 is working!')
})  