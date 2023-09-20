const httpServer = require('http');

const server = httpServer.createServer((req,res) => {
  res.write('This is my server setup code');
  res.end();
});


server.listen(8000);