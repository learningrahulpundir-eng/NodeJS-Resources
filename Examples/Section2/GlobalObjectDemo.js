// Old way for Module

// console.log("Absolute path of the current directory:", __dirname);
// console.log("Absolute path of the current file:", __filename);

// Example
// const path = require('path');
// const filePath = path.join(__dirname, 'test.json');
// console.log("Absolute path of the test.json file:", filePath);

// import {fileURLToPath} from 'url';
// import {dirname} from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// console.log("Absolute path of the current directory:", __dirname);
// console.log("Absolute path of the current file:", __filename);

//console.log(process.argv);
console.log(process.cwd());
