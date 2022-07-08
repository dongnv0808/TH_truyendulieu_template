const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {
    fs.readFile('index.html', 'utf-8', (err, data) => {
        if(err){
            res.writeHead(404, {'Content-Type':'text/html'});
            return res.end('404 not found');
        }
        let username = 'Duy';
        data = data.replace('{username}', username);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end()
    })
})

server.listen(8080, () => {
    console.log('Running server in http://localhost:8080');
})