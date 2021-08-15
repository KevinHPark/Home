let users = [];

function store() {
    let newUser = document.querySelector("#username");
    let valueUser = newUser.value;
    users.push(valueUser);
    serializedUsers = JSON.stringify(users);
    localStorage.setItem("users", serializedUsers);
    window.location.href = "index.html";
}

// let userH1 = document.forms["loginForm"]["username"];

// userH1 = localStorage.setItem(user);

// alert(localStorage.getItem("userH1"));

// userH1.innerHTML = `${userName}`;

//let users = JSON.parse(serializedUsers)
// if(serializedUsers === null){
//     users = []
// } else {
//     users = JSON.parse(serializedUsers)
// }