const fs = require("fs");

fs.readFile('file.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log('error loading file')
    } else {
        console.log(data)
    }
})



console.log('Hello after fileRead')