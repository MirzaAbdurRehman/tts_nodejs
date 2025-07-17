

const path = require('path'); // Non-Global Core Module

const File = require('fs'); // Importing File System module

const { error } = require('console');

const myFolder1 = path.join(__dirname, 'CRUD');  // how to get folder using path module

const myFile =  `${myFolder1}/create.txt`;   // how to get folder and cretae file using path module

const myFile1 =  `${myFolder1}/mirza.txt`;

// Creating a file

// File.writeFileSync(myFile2, 'This is a CRUD file'); // Creating 'crud.js' in 'myFolder1'


// Reading the file

// File.readFile(myFile, 'utf8' ,(error, file) => {
//   console.log(file);
// })



// Update File


// File.appendFile(myFile, 'in Node js Class', (error) => {
//     if(!error) {
//         console.log('File updated successfully!');
//     }
// })


// Delete File


File.unlinkSync(myFile1, (error) => {
        if(!error) {
        console.log('File Deleted successfully!');
    }
})


// Rename File

// File.rename(myFile, `${myFolder1}/kashif.txt`, (ero) => {
//         if(!error) {
//         console.log('File Renmaing successfully!');
//     }
// })
