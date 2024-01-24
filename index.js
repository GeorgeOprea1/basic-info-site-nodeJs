const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let filePath = "./";

  if (req.url === "/") {
    filePath += "index.html";
  } else if (req.url === "/about") {
    filePath += "about.html";
  } else if (req.url === "/contact-me") {
    filePath += "contact-me.html";
  } else {
    filePath += "404.html";
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data, "utf-8");
    }
  });
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
