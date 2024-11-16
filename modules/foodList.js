const food_display_list = document.querySelector(".food-display-list");
import { explore_menu_category } from "./menuList.js";
import { food_list, cart_items } from "./informationalObjects.js";
import * as chitietsp from "./chitietsp.js";
import * as pagination from "./pagination.js";

function add_to_cart(id) {
  if (!cart_items[id]) {
    cart_items[id] = 1;
  } else {
    cart_items[id] += 1;
  }
  foodListDisplay();
}
function remove_from_cart(id) {
  cart_items[id] -= 1;

  foodListDisplay();
}

function add_remove_icon() {
  let plus_icon = document.querySelectorAll(".plus-icon");
  let minus_icon = document.querySelectorAll(".minus-icon");
  plus_icon.forEach((element) =>
    element.addEventListener("click", () => add_to_cart(element.id))
  );
  minus_icon.forEach((element) =>
    element.addEventListener("click", () => remove_from_cart(element.id))
  );
}

export var pages = [];
export var page_number = 0;
export function foodListDisplay() {
  food_display_list.innerHTML = "";
  var page = [];
  let product_index = [];
  
  for (let i = 0; i < food_list.length; i++) {
    const food = food_list[i];
    if (explore_menu_category === "all" ||explore_menu_category === food.category) {
      let index = i;
      product_index.push(index);
    }
  }
  
  if(product_index.length/6<=1){
    page_number = Math.floor(product_index.length/6);
    for(let i=0;i<product_index.length;i++){
      const food = food_list[product_index[i]];
        var textItem = `
        <div class="food-item">
          <div class="food-item-img-container">
            <img src='${food.image}' class="food-item-img"/>
            <div class="counter">
              ${counter_logic(food.id)}
            </div>
          </div>
          <div class="food-item-info">
            <div class="food-item-name-rating">
              <p>${food.name}</p>
            </div>
            <p class="food-item-price">Giá ${food.price}đ</p>
            <button>
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
        `;
        page.push(textItem);
    }
    pages.push(page);
  }
  else{
    page_number =  Math.ceil(product_index.length/6);
    
    for(let i=0;i<product_index.length;i++){
      const food = food_list[product_index[i]];
        var textItem = `
        <div class="food-item">
          <div class="food-item-img-container">
            <img src='${food.image}' class="food-item-img"/>
            <div class="counter">
              ${counter_logic(food.id)}
            </div>
          </div>
          <div class="food-item-info">
            <div class="food-item-name-rating">
              <p>${food.name}</p>
            </div>
            <p class="food-item-price">Giá ${food.price}đ</p>
            <button>
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
        `;
        page.push(textItem);
        let tmp = 0;
        if(page.length % 6 == 0){
          tmp++;
          if(tmp<product_index.length/6){
            pages.push(page);
            page = [];
          }
        }
        if(food_list[i] == food_list[product_index.length-1]){
          pages.push(page);
        }
    }
  }

  pages[0].forEach(function(page){
    food_display_list.innerHTML += page;
  });
  
  chitietsp.showChiTiet();
  add_remove_icon();
}



function counter_logic(id) {
  if (cart_items[id] > 0) {
    return `
      <img id='${id}' class="icon subtract minus-icon" src="./images/red minus icon.png"/>
      <p>${cart_items[id]}</p>
      <img id='${id}' class="icon add plus-icon" src="./images/green plus icon.png" alt=""/>
  `;
  } else {
    return `<img id='${id}' class="plus-icon icon" src="./images/plus icon.png"/>`;
  }
}
