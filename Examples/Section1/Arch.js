import fs from 'fs';


//Blocking code.. (Synchronous code)

// console.log('1');
// const data = fs.readFileSync('data/Detail.txt', 'utf-8');
// console.log(data);
// console.log('2');

//Non-blocking code.. (Asynchronous code)

console.log('1');
fs.readFile('data/Detail.txt', 'utf-8', (err, data) => {
    console.log(data);
});
console.log('2');