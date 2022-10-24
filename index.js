const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let path = "";
  res.setHeader("Content-Type", "text/html");
  switch (req.url) {
    case "/":
      path = "./pages/index.html";
      break;
    case "/about":
      path = "./pages/about.html";
      break;
    case "/contact":
      path = "./pages/contact.html";
      break;
    default:
      path = "./pages/404.html";
      res.statusCode = 404;
  }
  const data = fs.readFileSync(path, (err) => {
    if (err) console.log(err);
  });
  res.write(data);
  res.end();
});

server.listen(8080, "localhost", () => {
  console.log("listening for requests");
});
