const myFile = require('fs');  // Non - Global coRe module:


console.log("Node js Non - Global coRe module");  // Global coRe module:


myFile.writeFileSync('mirza.excel', 'Hello, Mirza! kia haal chal!');  // Writing to a file


console.log("Node js Global coRe module");  // Global coRe module:




let a  = 1;

for(let i = 0; i <= 5; i++) {
    console.log("Value of a is: " + a);
    a += 10;
}


function add(x, y) {
    console.log("Adding " + x + " and " + y);
    return x + y;
}


add(10, 20); // 30

