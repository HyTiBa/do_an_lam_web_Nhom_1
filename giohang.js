
function toggleCart() {
      const cartSidebar = document.querySelector('.cart-sidebar');
      cartSidebar.classList.toggle('open');
  }
  let cart = [];
  let total = 0;

function addToCart(itemName, itemPrice) {
          cart.push({ name: itemName, price: itemPrice });
          displayCartItems();
      }

      function displayCartItems() {
          const cartItemsContainer = document.getElementById('cart-items');
          const totalPriceContainer = document.getElementById('total-price');

          cartItemsContainer.innerHTML = '';
          let totalPrice = 0;

          cart.forEach((item, index) => {
              const listItem = document.createElement('li');
              listItem.textContent = `${item.name} - ${item.price.toLocaleString()} VND`;

              const removeButton = document.createElement('button');
              removeButton.textContent = "Xóa";
              removeButton.onclick = function() {
                  removeFromCart(index);
              };

              listItem.appendChild(removeButton);
              cartItemsContainer.appendChild(listItem);

              totalPrice += item.price;
          });

          totalPriceContainer.textContent = `Tổng tiền: ${totalPrice.toLocaleString()} VND`;
      }

      function removeFromCart(index) {
          cart.splice(index, 1);
          displayCartItems();
      }

    
