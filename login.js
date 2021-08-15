let serializedUsers = localStorage.getItem("users")
let userH1 = document.querySelector("#loginName");

if(serializedUsers === null){
    users = []
} else {
    users = JSON.parse(serializedUsers)
    userH1.innerHTML = `${users}`;
    userH1.setAttribute('href', 'profile.html')
}

function store() {
    let newUser = document.querySelector("#username");
    let valueUser = newUser.value;
    users.push(valueUser);
    serializedUsers = JSON.stringify(users);
    localStorage.setItem("users", serializedUsers);
 
}

// newUser.innerHTML = `${users}`;
// let userH1 = document.forms["loginForm"]["username"];

// userH1 = localStorage.setItem(user);

// alert(localStorage.getItem("userH1"));
