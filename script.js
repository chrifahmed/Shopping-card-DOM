

// heart icons ----------------------------

let favs = document.getElementsByClassName("fa-heart")
for (let fav of favs) {
    fav.addEventListener("click" , function(){
       fav.style.color === "red" ? fav.style.color = "black" : fav.style.color = "red"
    })  
}

//  Plus button -----------------------------------

let plusBtns = Array.from(document.getElementsByClassName("fa-plus-circle"))
for (let i in plusBtns) {
    plusBtns[i].addEventListener("click", function (){
        plusBtns[i].nextElementSibling.innerText++;
        totalSum()
    })
}

// minus button -----------------------------------

let minusBtns = Array.from(document.getElementsByClassName("fa-minus-circle"));

for (let i in minusBtns) {
    minusBtns[i].addEventListener("click", function () {
        minusBtns[i].previousElementSibling.innerText > 0 &&
            minusBtns[i].previousElementSibling.innerText--;
        totalSum()
    })
}


// delete button -----------------------------------------

let deleteBtns = document.querySelectorAll(".fa-trash-alt")

for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", function () {
        deleteBtns[i].parentNode.parentNode.parentNode.remove()
        totalSum()
    })
}


// the sum function ---------------------------------------
  


function totalSum() {
    let qutes = Array.from(document.getElementsByClassName("quantity"));
    let unitPrices = document.querySelectorAll(".unit-price")
    let totalPrice = document.querySelector(".total")

    let s = 0;
    for (let i in qutes) {
        s = s + unitPrices[i].innerText.replace("$", "") * qutes[i].innerText
    }
    totalPrice.innerText = s + " $"

} 
