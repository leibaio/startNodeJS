const http = require('http');
// const querystring = require('querystring');

const server = http.createServer((req, res) => {
  const method = req.method;
  console.log('method', method);
  const url = req.url;
  console.log('url', url);
  req.query = req.url.split('?')[2];
  console.log('query', req.query);
  
  res.end(
    JSON.stringify(req.query)
  );
});

server.listen(5000, () => {
  console.log('server running at port 5000');
})