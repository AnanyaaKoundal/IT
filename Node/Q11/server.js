const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
            res.writeHead(200);
            res.end("Hello world, This is my Node.js server");
            return;
    }
    else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

const port = 10000;
server.listen(port, () => {
    console.log(`Node.js server is running on port ${port}`);
});
