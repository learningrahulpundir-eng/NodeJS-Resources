//fs modeule demo
// in-build module in Node js
// it is used to read/write/delete/rename/ the file and used to create the directory and delete the directory

const fs = require('fs');

//#region Example - 1: Reading content from the file (Synchronous and Asynchronous way)
// const data = fs.readFileSync('demo.txt', 'utf-8');
// console.log(data);

// fs.readFile('demo.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log("Data come from Asycnhronous way");
//     console.log(data);
// });
//#endregion

//#region Example - 2: Writing content to the file (Synchronous and Asynchronous way)
// const data = "This is the demo file for asynchronous fs module in Node js";
// fs.writeFileSync('demo.txt', data);
// console.log("Data written to the file successfully");

// fs.writeFile('demo.txt', data, (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log("Data written to the file successfully in Asynchronous way");
// });
//#endregion

//#region Example - 3: Deleting the file (Synchronous and Asynchronous way)
// fs.unlinkSync('demo.txt');
// console.log("File deleted successfully");

// fs.unlink('demo.txt', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log("File deleted successfully in Asynchronous way");
// });
//#endregion

//#region Example - 4: Renaming the file (Synchronous and Asynchronous way)
// fs.renameSync('demo.txt', 'demo1.txt');
// console.log("File renamed successfully");

// fs.rename('demo1.txt', 'demo.txt', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log("File renamed successfully in SAsynchronous way");
// });
//#endregion

//#region Example - 5: Creating the directory (Synchronous and Asynchronous way)
// fs.mkdirSync('demoDir');
// console.log("Directory created successfully");

// fs.mkdir('demoDir1', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log("Directory created successfully in Asynchronous way");
// });
//#endregion

//#region Example - 6: Deleting the directory (Synchronous and Asynchronous way)
// fs.rmdirSync('demoDir');
// console.log("Directory deleted successfully");

fs.rmdir('demoDir1', (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Directory deleted successfully in Asynchronous way");
});
//#endregion