// Example: Update cart count
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');

// Function to update cart count
function updateCartCount(count) {
  cartCount = count;
  cartCountElement.textContent = cartCount;
}

// Example: Add an item to the cart
document.querySelector('.cart-icon').addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default link behavior
  updateCartCount(cartCount + 1); // Increment cart count
  alert('Item added to cart!'); // Optional: Show a message
});