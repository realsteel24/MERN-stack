const express = require("express");
const app = express();

let requests = 0;
function calculateRequests(req, res, next) {
    requests ++;
    console.log(requests);
    next();
}

function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;
    if (!(username === "realsteel" && password === "dyna")) {
        res.status(403).json({
            msg: "Invalid username and password"
        });
    } 
    else {
        next();
    }
};

function kidneyMiddleware(req, res, next) {
    const kidneyId = req.query.kidneyId;
    if (!(kidneyId === "1" || kidneyId === "2")) {
        res.status(411).json({
            msg: "Invalid inputs"
        })
    }
    else {
        next();
    }
};

app.get('/healthcheckup', calculateRequests, userMiddleware, kidneyMiddleware, (req, res) => {
    
    
    res.send("Your are doing perfectly fine sir!")
    
});

app.listen(3000);
