
let userName = "Login";

// userName = window.prompt("type name NOW");

let userH1 = localStorage.setItem(userName)
let userH1 = document.querySelector("#loginName");
userH1.innerHTML = `${userName}`;

