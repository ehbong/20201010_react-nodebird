/** @format */

const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.write("<h1>hello node</h1>");
  res.write("<h2>hello node</h2>");
  res.write("<h3>hello node</h3>");
  res.write("<h4>hello node</h4>");
  res.end("hello node");
});
const port = 3065;
server.listen(port, () => {
  console.log("서버 실행 중", port);
});
