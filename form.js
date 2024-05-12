const nameInput = document.querySelector("#name"); 
const productidInput = document.querySelector("#productid");
const priceInput = document.querySelector("#price");
const button = document.querySelector("button");
const h1 = document.querySelector("content")
button.addEventListener("click", () =>{ 
    const nameValue = nameInput.value;
    const productidValue = product.value;
    const priceValue = price.value;
    h1.innerHTML =
    `name la ${nameValue}
    productID la ${productidValue}
    price la ${priceValue}
    `
})