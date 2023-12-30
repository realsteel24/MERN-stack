
let counter = 0;

function increment() {
    counter++;
    console.log(counter);
}

setInterval(increment, 1000);

// Using setTimeout only

// let counter = 0;

// function increment() {
//     counter++;
//     console.log(counter);

//     setTimeout(increment, 1000)
// }
// increment();

