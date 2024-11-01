/*let cart = [];
let total = 0;


function toggleCart() {
    const cartSidebar = document.querySelector('.cart-sidebar');
    cartSidebar.classList.toggle('open');
}


function addToCart(itemName, itemPrice) {
   
    cart.push({ name: itemName, price: itemPrice });
    total += itemPrice;

}
displayCartItems();
    cartItemsDiv.innerHTML = '';
        let totalPrice = 0;

function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');

    
    cartItemsContainer.innerHTML = 'Bạn chọn món';
    function removeFromCart(index) {
    cart.splice(index, 1); 
    updateCartDisplay();
    
}

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ${item.price} VND`;
        cartItemsContainer.appendChild(listItem);
    });

    
    totalPriceContainer.textContent = `Tổng tiền: ${total} VND`;
}
function updateCart() {
        const cartItemsDiv = document.getElementById('cartItems');
        const totalPriceSpan = document.getElementById('totalPrice');

        // Reset giỏ hàng
        cartItemsDiv.innerHTML = '';
        let totalPrice = 0;

        // Lấy tất cả các món đã chọn
        document.querySelectorAll('input[name="item"]:checked').forEach(item => {
            const itemName = item.value;
            const itemPrice = parseInt(item.getAttribute('data-price'));

            // Tạo phần tử hiển thị món ăn trong giỏ hàng
            const itemDiv = document.createElement('div');
            itemDiv.textContent = `${itemName} - ${itemPrice.toLocaleString()} VND`;

            // Thêm món ăn vào giỏ hàng
            cartItemsDiv.appendChild(itemDiv);

            // Cộng tiền món ăn vào tổng tiền
            totalPrice += itemPrice;
        });

        // Cập nhật tổng tiền
        totalPriceSpan.textContent = totalPrice.toLocaleString();
    }
totalPriceSpan.textContent = totalPrice.toLocaleString();*/
// Khai báo biến giỏ hàng và tổng tiền nếu chưa có
// Khai báo giỏ hàng và tổng tiền

function toggleCart() {
    const cartSidebar = document.querySelector('.cart-sidebar');
    cartSidebar.classList.toggle('open');
}
let cart = [];

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
  
    