let users = []

function store() {
    let newUser = document.querySelector("username");
    return newUser;
    // localStorage.setItem("username", username.value);
}
let valueUser = store();
users.push(valueUser)

localStorage.setItem("username", username.value);

// function checkLogin(){
//     let userName = document.forms["loginForm"]["username"];
//     let passWord =document.forms["loginForm"]["password"];
// }
// userName = window.prompt("Welcome to our e-commerce site! Please enter your name");

// checkLogin()

let serializedUsers = JSON.stringify(users)
localStorage.setItem("users", serializedUsers)

// let userH1 = document.forms["loginForm"]["username"];

// userH1 = localStorage.setItem(user);

// alert(localStorage.getItem("userH1"));

// userH1.innerHTML = `${userName}`;