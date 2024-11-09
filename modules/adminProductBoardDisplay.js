import { food_list } from "./informationalObjects.js"; 
const adminProductBoard = document.querySelector(".adminProductBoard")
export function adminProductBoardDisplay(){
    food_list.forEach((item) => {
        adminProductBoard.innerHTML += `
        <div class="product section">
        <div class="info">
          <img
            src="${item.image}"
          />
          <div>
            <p class="name">${item.name}</p>
          </div>
        </div>
        <div class="categories">
          <div class="category">${item.category}</div>
        </div>
        <div class="price">
          ${item.price}đ
        </div>
        <div class="actions">
          <div class="modify">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg>
            <p>Sửa</p>
          </div>
          <div class="remove">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
              />
            </svg>
            <p>Gỡ</p>
          </div>
        </div>
      </div>
        `;
      });
}