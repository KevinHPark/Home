
let userName = "Login";

// userName = window.prompt("type name NOW");

let userH1 = document.querySelector("#loginName");
userH1.innerHTML = `${userName}`;

//Note: we haven't learned about these yet, but its just code that runs when "Add to cart" button is clicked
// function addToCart(title, price, picturePath){
//     alert(`${title} added to cart`);
//     //Note: this grabs the current cart from localStorage
//     let productsInCart = JSON.parse(localStorage.getItem("productsInCart"))
//     //Note: this handles empty cart
//     if (productsInCart === null || productsInCart === undefined){
//         productsInCart = [];
//     }
//     //Task 3: add the item (title,price,picturePath) as an object to productsInCart array
    
//     //Task 3: store updated productsInCart array in localStorage (remember to stringify)
    
// }
