

const Http = require('http');  // Non- Global Core Module:


Http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application\json'}); // Setting response header
    res.write(JSON.stringify([
          {name: "Maryam", age: 20, city: "Karachi"},
        {name: "Areesha", age: 20, city: "Karachi"},
        {name: "Kashif", age: 22, city: "Karachi"}
    ]

    ));
    res.end(); // Writing response to the client
}).listen(1000); // Server listens on port 1000