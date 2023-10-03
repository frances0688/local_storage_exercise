// Exercise 1

const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userMessage = document.getElementById('message');
const btn = document.getElementById('btn');

// function createDataObject(e) {
//     e.preventDefault();
//     const user = {
//         name : userName.value,
//         email : userEmail.value,
//         message : userMessage.value
//     };

//     console.log(user);
    
//     localStorage.user = JSON.stringify(user);
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     const newPar = document.createElement('p');
    
//     newPar.innerHTML = `Name: ${storedUser.name}<br>Email: ${storedUser.email}<br>Message: ${storedUser.message}`;
//     document.querySelector('body').appendChild(newPar);
// }

// btn.addEventListener('click', createDataObject)


// Exercise 2 : EXTRA

// const user = {
//     name : [],
//     email : [],
//     message : []
// };

// function createDataObject(e) {
//     e.preventDefault();
    
//     user.name.push(userName.value);
//     user.email.push(userEmail.value);
//     user.message.push(userMessage.value);

//     console.log(user); 
//     printObjectInfo(user);
//     document.getElementById('myForm').reset();
// }

// function printObjectInfo (user){
//     localStorage.user = JSON.stringify(user);
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     const newPar = document.createElement('p');
    
//     for (let i=0; i<user.name.length; i++){
//         newPar.innerHTML = `User #${i+1}<br>Name: ${storedUser.name[i]}<br>Email: ${storedUser.email[i]}<br>Message: ${storedUser.message[i]}`;
//         document.querySelector('body').appendChild(newPar);
//     }
// }


// EXTRA - Version 2

const allUsers = []

function createDataObject(e) {
    e.preventDefault();
    
    const user = {
        name : userName.value,
        email : userEmail.value,
        message : userMessage.value
    };
    allUsers.push(user)
    
    
    localStorage.allUsers = JSON.stringify(allUsers);
    
    const storedUsers = JSON.parse(localStorage.getItem("allUsers"));
    const newPar = document.createElement('p');
    
    for (let i=0; i<storedUsers.length; i++){
        newPar.innerHTML = `User #${i+1}<br>Name: ${storedUsers[i].name}<br>Email: ${storedUsers[i].email}<br>Message: ${storedUsers[i].message}`;
        document.querySelector('body').appendChild(newPar);
    }
   
    document.getElementById('myForm').reset();
}


btn.addEventListener('click', createDataObject);
clear.addEventListener('click', localStorage.clear())