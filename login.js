function checkLogin(){
    let userName = document.forms["loginForm"]["username"];
    let passWord =document.forms["loginForm"]["password"];
}
// userName = window.prompt("Welcome to our e-commerce site! Please enter your name");



let userH1 = document.forms["loginForm"]["username"];

userH1 = localStorage.setItem(document.forms["loginForm"]["username"])

alert(localStorage.getItem("userH1"));

userH1.innerHTML = `${userName}`;