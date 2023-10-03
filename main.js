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

const user = {
    name : [],
    email : [],
    message : []
};

function createDataObject(e) {
    e.preventDefault();
    
    user.name.push(userName.value);
    user.email.push(userEmail.value);
    user.message.push(userMessage.value);

    console.log(user); 
    printObjectInfo(user);
    document.getElementsByClassName('input').reset();
}

function printObjectInfo (user){
    localStorage.user = JSON.stringify(user);
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const newPar = document.createElement('p');
    
    for (let i=0; i<user.name.length; i++){
        newPar.innerHTML = `User #${i+1}<br>Name: ${storedUser.name[i]}<br>Email: ${storedUser.email[i]}<br>Message: ${storedUser.message[i]}`;
        document.querySelector('body').appendChild(newPar);
    }
}

function clearLocalStorage() {
    localStorage.clear()
}

btn.addEventListener('click', createDataObject);
clear.addEventListener('click', clearLocalStorage)