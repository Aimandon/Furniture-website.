document.addEventListener("DOMContentLoaded", function() {
    // Select all "ADD TO CART" buttons
    let addToCartButtons = document.querySelectorAll(".addToCart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Redirect to checkout page
            window.location.href = "checkout.html";
        });
    });
});


  // Function to add product to cart
  function addToCart(image, name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];  // Get cart items from localStorage or initialize empty array

    // Add the new product to the cart
    cart.push({ image, name, price });

    // Store the updated cart in localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  // Add event listeners to all "Add to Cart" buttons
  document.querySelectorAll(".addToCart").forEach(button => {
    button.addEventListener("click", function () {
      const product = this.closest('.grid-item');  // Get the closest grid-item (product)
      const image = product.querySelector('img').src;  // Get product image source
      const name = product.querySelector('.product-name').innerText;  // Get product name
      const price = product.querySelector('.product-price').innerText;  // Get product price

      addToCart(image, name, price);  // Call the addToCart function
    });
  });




