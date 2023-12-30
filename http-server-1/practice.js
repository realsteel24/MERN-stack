const fs = require('fs')

function rohanFileReader() {
   
    return new Promise(function(resolve) {
        fs.readFile('a.txt', 'utf-8', function(err, data) {
            resolve(data);
        });
    });
}

async function onDone() {
    const result = await rohanFileReader();
    console.log(result);
}

onDone();

const ALL_USERS = [
    {
      username: "harkirat@gmail.com",
      password: "123",
      name: "harkirat singh",
    },
    {
      username: "raman@gmail.com",
      password: "123321",
      name: "Raman singh",
    },
    {
      username: "priya@gmail.com",
      password: "123321",
      name: "Priya kumari",
    },
  ];
  
  function userExists(username, password) {
    // write logic to return true or false if this user exists
    // in ALL_USERS array
    let userStatus = false;
    for (let i = 0; i < ALL_USERS.length; i++) {
      if (ALL_USERS[i].username === username && ALL_USERS[i].password === password) {
          userStatus = true;
      }
    }  
  
    return userStatus;
  }
  console.log(userExists('priya@gmail.com', '1213321'))

  


  



