const nameInput = document.queryselector("#name");
const button = document.queryselector("button")
const h1 = document.querySelector(".content")
//add evenlistener 
button.addEventlistener("click",()=>{
    const nameValue = nameInput.value;
    h1.innerHTML ="xin chao"+ nameValue;
    nameInput.value = "";
    h1.classList.add("red")
});
//tao 1 form them san pham: productid, name, price 
// hien thi thong tin san pham tren giao dien 