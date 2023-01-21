const http = require('node:http');

const server = http.createServer((req, res) => {
  if(req.url === "/") {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end("<h1>Hello world</h1>")
  } 
})


server.listen(5, () => {
  console.log('server1 is working!')
})  