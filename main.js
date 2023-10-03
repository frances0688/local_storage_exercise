const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userMessage = document.getElementById('message');
const btn = document.getElementById('btn');

function createDataObject(e) {
    e.preventDefault();
    const user = {
        name : userName.value,
        email : userEmail.value,
        message : userMessage.value
    };

    console.log(user);
    
    localStorage.user = JSON.stringify(user);
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const newPar = document.createElement('p');
    
    newPar.innerHTML = `Name: ${storedUser.name}<br>Email: ${storedUser.email}<br>Message: ${storedUser.message}`;
    document.querySelector('body').appendChild(newPar);
}

btn.addEventListener('click', createDataObject)

