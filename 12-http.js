const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.end('welcome to our home page');
    } else if (req.url === '/about') {
        res.end('here is our short history');
    } else {
        res.end(`<a href="/">oops</a>`);
    }
})

server.listen(5000)