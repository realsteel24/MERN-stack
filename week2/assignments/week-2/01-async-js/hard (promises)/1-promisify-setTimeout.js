/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {

  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
      console.log("Resolves after" + n + " seconds");

    }, n * 1000)
    
  })
}

async function run() {
  await wait(1);
}

run();



module.exports = wait;
