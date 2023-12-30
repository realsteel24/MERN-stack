
function numeral(value) {
    console.log("hello", value)
}

function timer() {
    for (let i = 0; i < 10; i) {
        setInterval(numeral, 10);
        i++;
    }
}

timer()