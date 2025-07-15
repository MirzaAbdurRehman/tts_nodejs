// console.log(process.argv[2]);


const File = require('fs'); // Importing File System module

const action = process.argv[2]; // Getting the action from command line arguments
const fileName = process.argv[3]; // Getting the file name from command line arguments
const data = process.argv[4]; // Getting the data from command line arguments


if(action == 'create'){
    File.writeFileSync(fileName, data); // Creating a file with the provided data
    console.log(`File ${fileName} created successfully!`);
}else if(action == 'delete'){
    File.unlinkSync(fileName); // Deleting the specified file
    console.log(`File ${fileName} deleted successfully!`);
}else{
    console.log("Invalid action! Please use 'create' or 'delete'.");
} 