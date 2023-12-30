// creating this file to test github

let names = [];

function printer() {
    return new Promise(resolve => {
        setTimeout(() => {
            names.push("Rohan", "Ritika", "Mohan", "Mona", "Premila", "Dyna");
            resolve(names);
        }, 5000)
    })

}

async function print() {
    const update = await printer();
    for (const words of update) {
        console.log(words)
    }
}

print()