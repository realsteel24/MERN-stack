const fs = require("fs");

fs.readFile('file.txt', 'utf-8', (err, data) => {
    console.log('before file read')
    console.log(data);
    console.log('after file read')
})

fs.writeFile('file.txt', 'Hello This has been overwritten',(err) =>  {
    if (err) {
        console.log('error writing to file', err)
    } else {
        console.log('successfully overwritten')
        console.log('after file write')
    }
})

let counter = 0;
for  (let i = 0; i < 1000000000; i++) {
    counter += i;
}
console.log(counter);