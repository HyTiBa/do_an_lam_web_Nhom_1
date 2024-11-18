import { food_list } from "./informationalObjects.js";
import { foods } from "./chitietsp.js";

export function showCart() {
    var elementCart = document.querySelector(".cart-icon");
    if (elementCart) {
        elementCart.addEventListener("click", function () {
            const existingOverlay = document.querySelector(".overlay");
            if (existingOverlay) {
                existingOverlay.remove();
            }

            const overlay = document.createElement("div");
            overlay.classList.add("overlay"); // Thêm lớp overlay

            var cartContainer = document.createElement("div");
            cartContainer.classList.add("cart_container");
            cartContainer.innerHTML = `
        <div style="display: flex; width: 100%; ">
            <i class="fa-regular fa-rectangle-xmark" style="color: black; margin-left: auto; font-size: 24px;"></i>
        </div>
        <div>
            <div style="width: 100%; text-align: center; font-size: 24px; margin: 12px 0; color:rgb(61, 61, 57)">Sản phẩm</div>
         
            <div style="margin-right: 50px; margin-bottom: 50px; border: 1px;" class="table-container">
                <table>
                   <thead>
                        <tr>
                            <th>Sản phẩm</th>
                            <th>Loại</th>
                            <th>Giá</th>
                            <th>Số lượng</th>
                            <th>Thêm vào giỏ</th>
                        </tr>
                    </thead>
                    <tbody class="listSP">
                        <tr>
                            <td>
                                <div class="product-info">
                                    <img src="./images/bun bo.jpg" alt="ảnh sản phẩm" id="img" width="30%" height="auto"> 
                                    <span>Bún Bò Huế</span>
                                </div>
                            </td>
                            <td><span class="tag">Bún</span></td>
                            <td>35.000đ</td>
                            <td>
                                <div class="container_btn">
                                    <button onclick="decrease()">-</button>
                                    <button >1</button>
                                    <button onclick="increase()">+</button>
                                </div>
                            </td>
                            <td>
                                <button class="edit">
                                    <span>Thêm</span>
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                            </td>
                            
                        </tr>
    
                    
                    
                    </tbody>
                </table>
            </div>
        </div>
        
        
        
        <div style="background-color: white;">
            <div style="width: 100%; text-align: center; font-size: 24px; margin: 12px 0; color:rgb(61, 61, 57)">
                <i class="fa-solid fa-cart-shopping"></i>Giỏ hàng
            </div>
            <div class="table-container">
            
                <table>
                    <thead>
                        <tr>
                            <th>Sản phẩm</th>
                            <th>Giá</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                            <th>Xóa</th>
                        </tr>
                    </thead>
                    <tbody class="cart-body">

                    </tbody>
                    
                </table>
            </div>

            <div style="background-color: white;">
                <div style="width: 100%; display: flex; justify-content: space-between; margin: 10px 0;">
                    <span>Tạm tính: </span>
                    <span>999999 VND</span>
                </div>
                <button class="btn_ThanhToan">Thanh toán</button>
           
            </div>
        </div>
            `;
            // Thêm overlay và cartContainer vào DOM
            document.body.appendChild(overlay);
            overlay.appendChild(cartContainer); // Thêm cartContainer vào overlay

            // Thêm sự kiện đóng cửa sổ khi click vào dấu 'x'
            const closeBtn = cartContainer.querySelector("i");
            closeBtn.addEventListener("click", function () {
                overlay.remove(); // Xóa overlay khi click vào dấu 'x'
            });


            var elementBodySP = document.querySelector(".listSP");
            if(elementBodySP){
                elementBodySP.innerHTML = ``;
                food_list.forEach(food => {
                    elementBodySP.innerHTML += `
                    <tr>
                        <td>
                            <div class="product-info">
                                <img src="${food.image}" alt="ảnh sản phẩm" id="img" width="30%" height="auto"> 
                                <span>${food.name}</span>
                            </div>
                        </td>
                        <td><span class="tag">${food.category}</span></td>
                        <td>${food.price}</td>
                        <td>
                            <div class="container_btn">
                                <button onclick="decrease()">-</button>
                                <button >1</button>
                                <button onclick="increase()">+</button>
                            </div>
                        </td>
                        <td>
                            <button class="edit">
                                <span>Thêm</span>
                                <i class="fa-solid fa-plus"></i>
                            </button>
                        </td>
                            
                    </tr> `;
                });
            }
            
            var element_cart_body = document.querySelector(".cart-body");
            if(element_cart_body){
                element_cart_body.innerHTML = ``;
                foods.forEach((item)=>{
                    const totalPrice = parseFloat(item.food.price) * item.soluong;
                    element_cart_body.innerHTML += `
                        <tr>
                            <td>
                                <div class="product-info">
                                    <img src="${item.food.image}" alt="ảnh sản phẩm" id="img" width="30%" height="auto"> 
                                    <span>${item.food.name}</span>
                                </div>
                            </td>
                            <td>${price.toLocaleString()} VND</td>
                            <td>
                                <div class="container_btn">
                                    <button onclick="decrease(${item.food.id})">-</button>
                                    <button>${item.soluong}</button>
                                    <button onclick="increase(${item.food.id})">+</button>
                                </div>
                            </td>
                            <td>
                                <span>${totalPrice.toLocaleString()} VND</span>
                            </td>
                            <td>
                                <i class="fa-solid fa-trash" style="color: #74C0FC; font-size: 20px; cursor: pointer;" onclick="removeItem(${item.food.id})"></i>
                            </td>
                        </tr>
                    `;
                });
            }

            document.querySelector(".btn_ThanhToan").addEventListener("click",()=>{
                foods.forEach((item)=>{
                    console.log(item);
                    
                })
            })
        });
    }
}

function decrease(id) {
    const item = foods.find((foodItem) => foodItem.food.id === id);
    if (item && item.soluong > 1) {
        item.soluong--; // Giảm số lượng
    } else if (item && item.soluong === 1) {
        foods = foods.filter((foodItem) => foodItem.food.id !== id); // Xóa sản phẩm nếu số lượng = 1
    }
    renderCart(); // Cập nhật lại giao diện
}

function removeItem(id) {
    foods = foods.filter((foodItem) => foodItem.food.id !== id); // Loại bỏ sản phẩm dựa trên id
    renderCart(); // Cập nhật lại giao diện
}

function renderCart() {
    var element_cart_body = document.querySelector(".cart-body");
    if (element_cart_body) {
        element_cart_body.innerHTML = ``; // Xóa nội dung cũ
        foods.forEach((item) => {
            const price = parseFloat(item.food.price.replace(/[^\d.]/g, "")); // Loại bỏ ký tự không phải số
            const totalPrice = price * item.soluong;

            element_cart_body.innerHTML += `
                <tr>
                    <td>
                        <div class="product-info">
                            <img src="${item.food.image}" alt="ảnh sản phẩm" id="img" width="30%" height="auto"> 
                            <span>${item.food.name}</span>
                        </div>
                    </td>
                    <td>${price.toLocaleString()} VND</td>
                    <td>
                        <div class="container_btn">
                            <button onclick="decrease(${item.food.id})">-</button>
                            <button>${item.soluong}</button>
                            <button onclick="increase(${item.food.id})">+</button>
                        </div>
                    </td>
                    <td>
                        <span>${totalPrice.toLocaleString()} VND</span>
                    </td>
                    <td>
                        <i class="fa-solid fa-trash" style="color: #74C0FC; font-size: 20px; cursor: pointer;" onclick="removeItem(${item.food.id})"></i>
                    </td>
                </tr>
            `;
        });
    }
}

function renderCart() {
    var element_cart_body = document.querySelector(".cart-body");
    if (element_cart_body) {
        element_cart_body.innerHTML = ``; // Xóa nội dung cũ
        foods.forEach((item) => {
            const price = parseFloat(item.food.price.replace(/[^\d.]/g, "")); // Loại bỏ ký tự không phải số
            const totalPrice = price * item.soluong;

            element_cart_body.innerHTML += `
                <tr>
                    <td>
                        <div class="product-info">
                            <img src="${item.food.image}" alt="ảnh sản phẩm" id="img" width="30%" height="auto"> 
                            <span>${item.food.name}</span>
                        </div>
                    </td>
                    <td>${price.toLocaleString()} VND</td>
                    <td>
                        <div class="container_btn">
                            <button onclick="decrease(${item.food.id})">-</button>
                            <button>${item.soluong}</button>
                            <button onclick="increase(${item.food.id})">+</button>
                        </div>
                    </td>
                    <td>
                        <span>${totalPrice.toLocaleString()} VND</span>
                    </td>
                    <td>
                        <i class="fa-solid fa-trash" style="color: #74C0FC; font-size: 20px; cursor: pointer;" onclick="removeItem(${item.food.id})"></i>
                    </td>
                </tr>
            `;
        });
    }
}

function decrease(id) {
    const item = foods.find((foodItem) => foodItem.food.id === id);
    if (item && item.soluong > 1) {
        item.soluong--;
    } else if (item && item.soluong === 1) {
        foods = foods.filter((foodItem) => foodItem.food.id !== id);
    }
    renderCart();
}

function increase(id) {
    const item = foods.find((foodItem) => foodItem.food.id === id);
    if (item) {
        item.soluong++;
    }
    renderCart();
}

function removeItem(id) {
    foods = foods.filter((foodItem) => foodItem.food.id !== id);
    renderCart();
}
