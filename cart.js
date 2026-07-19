// Load cart from Local Storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Display Cart
function displayCart() {

    let cartItems = document.getElementById("cartItems");
    let totalItems = document.getElementById("totalItems");
    let totalPrice = document.getElementById("totalPrice");

    cartItems.innerHTML = "";

    let itemCount = 0;
    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<h2>Your Cart is Empty</h2>";
        totalItems.innerText = "0";
        totalPrice.innerText = "₹0";
        return;
    }

    cart.forEach((item, index) => {

        itemCount += item.quantity;
        total += item.price * item.quantity;

        cartItems.innerHTML += `
        <div class="cart-card">

            <img src="${item.image}" alt="${item.name}">

            <div class="details">

                <h2>${item.name}</h2>

                <p><b>Price:</b> ₹${item.price}</p>

                <div class="qty">

                    <button onclick="decreaseQuantity(${index})">-</button>

                    <span>${item.quantity}</span>

                    <button onclick="increaseQuantity(${index})">+</button>

                </div>

                <p><b>Subtotal:</b> ₹${item.price * item.quantity}</p>

                <button class="remove" onclick="removeItem(${index})">
                    Remove
                </button>

            </div>

        </div>
        `;
    });

    totalItems.innerText = itemCount;
    totalPrice.innerText = "₹" + total;

    localStorage.setItem("cart", JSON.stringify(cart));
}

// Increase Quantity
function increaseQuantity(index) {
    cart[index].quantity++;
    displayCart();
}

// Decrease Quantity
function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index, 1);
    }

    displayCart();
}

// Remove Item
function removeItem(index) {
    cart.splice(index, 1);
    displayCart();
}

// Place Order
document.getElementById("checkoutBtn").addEventListener("click", function () {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Order placed successfully!");

    localStorage.removeItem("cart");

    cart = [];

    displayCart();

});
document.getElementById("cartItems").innerHTML=output;
// Load Cart
displayCart();