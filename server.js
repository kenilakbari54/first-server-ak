const http = require("http");

const port = 8081;

http
    .createServer((req, res) => {
        res.writeHead(200, { "content-Type": "text/html" });
        res.write("<h4>hi</h4>");
        res.end();
    })
    .listen(port, () => {
        console.log(`my node js server start ${port}`);
    });