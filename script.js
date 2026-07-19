// =============================
// Hari Electrical Shop
// script.js - Part 1
// =============================
function toggleMenu() {
    document.getElementById("sideMenu").classList.toggle("show");
}


// Shopping Cart Counter
let cartCount = 0;

// Wishlist Counter
let wishCount = 0;

// Add To Cart


// Update cart count
function updateCartCount() {
    let count = 0;

    cart.forEach(item => {
        count += item.quantity;
    });

    let cartCount = document.getElementById("cartCount");
    if (cartCount) {
        cartCount.innerText = count;
    }
}

// Add product to cart
function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let found = cart.find(item => item.name === name);

    if (found) {
        found.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            image: image,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(name + " added to cart!");
}

// Call when page loads
updateCartCount();

// Add To Wishlist
function addToWishlist(){

wishCount++;

alert("Added To Wishlist ❤️");

}

// Dark Mode

const darkBtn=document.getElementById("darkMode");

if(darkBtn){

darkBtn.onclick=function(){

document.body.classList.toggle("dark");

}

}

// Search

const search=document.querySelector(".search-box input");

if(search){

search.addEventListener("keyup",function(){

console.log("Searching:",this.value);

});

}
// ===============================
// script.js - Part 2
// ===============================

// Cart Counter
let cart = 0;

document.querySelectorAll(".add-cart").forEach(button=>{

button.addEventListener("click",()=>{

cart++;

document.getElementById("cart-count").innerHTML=cart;

alert("Product Added Successfully!");

});

});

// Wishlist Counter

let wish = 0;

document.querySelectorAll(".wishlist").forEach(button=>{

button.addEventListener("click",()=>{

wish++;

document.getElementById("wish-count").innerHTML=wish;

});

});

// Back To Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.className="top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// Scroll Animation

const cards=document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

const position=card.getBoundingClientRect().top;

if(position<window.innerHeight-100){

card.style.opacity="1";

card.style.transform="translateY(0)";

}

});

});
// ===============================
// Hari Electrical Shop
// script.js - Part 3
// ===============================

// Live Product Search

const searchInput=document.getElementById("search");

const products=document.querySelectorAll(".product");

if(searchInput){

searchInput.addEventListener("keyup",function(){

let value=this.value.toLowerCase();

products.forEach(product=>{

let text=product.innerText.toLowerCase();

if(text.includes(value)){

product.style.display="block";

}else{

product.style.display="none";

}

});

});

}


// Dark Mode Toggle

const darkMode=document.getElementById("dark-mode");

if(darkMode){

darkMode.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});

}


// Image Slider

let slideIndex=0;

const slides=document.querySelectorAll(".slide");

function showSlides(){

slides.forEach(slide=>{

slide.style.display="none";

});

slideIndex++;

if(slideIndex>slides.length){

slideIndex=1;

}

if(slides.length>0){

slides[slideIndex-1].style.display="block";

}

setTimeout(showSlides,3000);

}

showSlides();


// Product Filter

const filterButtons=document.querySelectorAll(".filter-btn");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

const category=button.dataset.category;

products.forEach(product=>{

if(category==="all" || product.dataset.category===category){

product.style.display="block";

}else{

product.style.display="none";

}

});

});

});