const food_display_list = document.querySelector(".food-display-list");
import { explore_menu_category } from "./menuList.js";
import { food_list, cart_items } from "./informationalObjects.js";

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

export function foodListDisplay() {
  food_display_list.innerHTML = "";

  food_list.forEach((food) => {
    food_display_list.innerHTML +=
      explore_menu_category == "all" || explore_menu_category == food.category
        ? `
      <div class="food-item">
              <div  class="food-item-img-container">
                <img src='${food.image}' class="food-item-img"/>
                  <div class="counter">
                    ${counter_logic(food.id)}
                  </div>
              </div>
              <div class="food-item-info">
                <div class="food-item-name-rating">
                  <p>${food.name}</p>
                  <img src='./images/1-star.png' alt="" />
                </div>
                <p class="food-item-description">${food.description}</p>
                <p class="food-item-price">${food.price}đ</p>
              </div>
            </div>
        `
        : "";
  });
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
