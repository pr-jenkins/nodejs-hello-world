const http = require("http");

const PORT = process.env.PORT || 3000;
const server = http.createServer(function (request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("This works");
});

server.listen(PORT);

console.log("Server running at http://localhost:%d", PORT);
