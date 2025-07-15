

const Path = require('path'); // Non-Global Core Module

const myFolder = Path.join(__dirname, 'myFolder');  // Joining current directory with 'myFolder'
const myNode = Path.join(myFolder, 'node_modules'); // Joining 'myFolder' with 'myNode.js'


console.log(myFolder); // Output: Absolute path to 'myFolder'
console.log(myNode); // Output: Absolute path to 'myNode.js'




///  Creating multiple files in Folder   ('myFolder')


const path = require('path'); // Non-Global Core Module

const File = require('fs'); // Importing File System module

const myFolder1 = path.join(__dirname, 'myFolder');  


for(let i = 1; i<=5 ; i++){
    File.writeFileSync(path.join(myFolder1, `file${i}.txt`), `This is file number ${i}`); // Creating files in 'myFolder'
    console.log(`file${i}.txt created successfully!`);
}


