const hamburger = document.querySelector("#menuBar")
const closeBtn = document.querySelector("#closeBtn")
const menu = document.querySelector("#menu")
hamburger.addEventListener("click",()=>{
    menu.style.right = "0"
})

closeBtn.addEventListener("click",()=>{
    menu.style.right = "-50%"
})

const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach(n => n.addEventListener("click", ()=>{
    menu.style.right = "-50%"
}))

//search product

const searchBar = document.getElementById("searchBar")
var products = document.querySelectorAll(".product-item")

searchBar.addEventListener("keyup", function(){
    var enteredValue = event.target.value.toUpperCase()
   
    
    for(var count = 0;count<products.length; count++){
        var productName = products[count].querySelector("p").textContent
        
        if(productName.toUpperCase().indexOf(enteredValue)<0){
            products[count].style.display = "none";
            
        }else{
            products[count].style.display = "block"
        }
    }
})
