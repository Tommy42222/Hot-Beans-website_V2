document.getElementById("apply-button").addEventListener("click", openform);
function openform() {
    document.getElementById("apply-form-container").style.display = "block";
    document.getElementById("apply-button").style.display = "none"
    document.getElementById("close-button").style.display = "block"
}

document.getElementById("close-button").addEventListener("click", closeform);
function closeform() {
    document.getElementById("apply-form-container").style.display = "none"
    document.getElementById("apply-button").style.display = "block"
    document.getElementById("close-button").style.display = "none"
}



let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  cartItems.innerHTML = "";

  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - £${item.price.toFixed(2)}
      <button class="remove-btn" onclick="removeFromCart(${index})">Remove Item</button>
    `;
    cartItems.appendChild(li);
  });

  cartTotal.textContent = total.toFixed(2);
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("openCartBtn").addEventListener("click", () => {
    document.getElementById("cartSidebar").classList.add("active");
    document.getElementById("openCartBtn").style.display = "none";
    document.getElementById("closeCartBtn").style.display = "inline-block";
  });

  document.getElementById("closeCartBtn").addEventListener("click", () => {
    document.getElementById("cartSidebar").classList.remove("active");
    document.getElementById("openCartBtn").style.display = "inline-block";
    document.getElementById("closeCartBtn").style.display = "none";
  });
});
