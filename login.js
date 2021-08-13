let userName = "Guest";


let userH1 = document.querySelector(".Login");

userH1.innerHTML = `Hello, ${userName}`;


function addToCart(title, price, picturePath){
    //Note: this grabs the current cart from localStorage

    let productsInCart = JSON.parse(localStorage.getItem("productsInCart"))
    //Note: this handles empty cart
    if (productsInCart === null || productsInCart === undefined){
        productsInCart = [];
    }
    //Task 3: add the item (title,price,picturePath) as an object to productsInCart array
    
    //Task 3: store updated productsInCart array in localStorage (remember to stringify)
    
}
