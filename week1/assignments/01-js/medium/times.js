/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let sum = 0;
    for (i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

const preTime = new Date();
const beforeTime = preTime.getTime();
calculateTime(1000000000)
const postTime = new Date();
const afterTime = postTime.getTime();
console.log(afterTime - beforeTime);


// Alternate solution
// function calculateTime(n) {
//     let startTime = performance.now();
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     let endTime = performance.now();
//     let duration = endTime - startTime;
//     let seconds = duration / 1000;
//     return seconds.toFixed(2);
// }

// console.log(calculateTime(1000000000))
