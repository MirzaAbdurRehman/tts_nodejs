

const Http = require('http');  // Non- Global Core Module:
const data = require('./srtdentData.js'); // Importing data from advanceApi.js


Http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application\json'}); // Setting response header
    res.write(JSON.stringify(data));
    res.end(); // Writing response to the client
}).listen(1000); // Server listens on port 1000