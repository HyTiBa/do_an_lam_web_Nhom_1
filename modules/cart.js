import { food_list } from "./informationalObjects.js";

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
                    <tbody>
                        <tr>
                            <td>
                                <div class="product-info">
                                    <img src="./images/bun bo.jpg" alt="ảnh sản phẩm" id="img" width="30%" height="auto"> 
                                    <span>Bún Bò Huế</span>
                                </div>
                            </td>
                            <td>35.000đ</td>
                            <td>
                                <div class="container_btn">
                                    <button onclick="decrease()">-</button>
                                    <button >1</button>
                                    <button onclick="increase()">+</button>
                                </div>
                            </td>
                            <td>
                                <span>9999999 VND</span>
                            </td>
                            <td>
                                <i class="fa-solid fa-trash" style="color: #74C0FC; font-size: 20px; cursor: pointer;"></i>
                            </td>
                        </tr>
    
                   
                        <tr>
                            <td>
                                <div class="product-info">
                                    <img src="./images/bun bo.jpg" alt="ảnh sản phẩm" id="img" width="30%" height="auto"> 
                                    <span>Bún Bò Huế</span>
                                </div>
                            </td>
                            <td>35.000đ</td>
                            <td>
                                <div class="container_btn">
                                    <button onclick="decrease()">-</button>
                                    <button >1</button>
                                    <button onclick="increase()">+</button>
                                </div>
                            </td>
                            <td>
                                <span>9999999 VND</span>
                            </td>
                            <td>
                                <i class="fa-solid fa-trash" style="color: #74C0FC; font-size: 20px; cursor: pointer;"></i>
                            </td>
                        </tr>
                    </tbody>
                    
                </table>
            </div>

            <div style="background-color: white;">
                <div style="width: 100%; display: flex; justify-content: space-between; margin: 10px 0;">
                    <span>Tạm tính: </span>
                    <span>999999 VND</span>
                </div>
                <button style="padding: 10px 0;width: 100%; font-size: 16px; background-color: tomato; border: none; color: white; cursor: pointer; border-radius: 10px;">Thanh toán</button>
           
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
        });
    }
}
