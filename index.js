const http = require("http");

const PORT = process.env.PORT || 3000;
const server = http.createServer(function (request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello World!");
});

server.listen(PORT);

console.log("Server running at http://localhost:%d", port);
