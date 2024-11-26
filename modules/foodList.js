const food_display_list = document.querySelector(".food-display-list");
const food_search = document.querySelector(".search-input");
import { explore_menu_category } from "./menuList.js";
import { food_list, cart_items } from "./informationalObjects.js";
import * as chitietsp from "./chitietsp.js";
import * as pagination from "./pagination.js";
let foodPriceItems = food_list;
let foodMenuItems = food_list;
let food_to_display = food_list;
let foodSearchItems = food_list;
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
  foodMenuSearch();
  foodInputSearch();

  // ---------------------------------------------------------
  food_display_list.innerHTML = "";
  var page = [];
  let product_index = [];

  for (let i = 0; i < food_list.length; i++) {
    const food = food_list[i];
    if (
      explore_menu_category === "all" ||
      explore_menu_category === food.category
    ) {
      let index = i;
      product_index.push(index);
    }
  }

  if (product_index.length / 6 <= 1) {
    page_number = Math.floor(product_index.length / 6);
    for (let i = 0; i < product_index.length; i++) {
      const food = food_list[product_index[i]];
      var textItem = textSP(food);
      page.push(textItem);
    }
    pages.push(page);
  } else {
    page_number = Math.ceil(product_index.length / 6);

    for (let i = 0; i < product_index.length; i++) {
      const food = food_list[product_index[i]];
      var textItem = textSP(food);
      page.push(textItem);
      let tmp = 0;
      if (page.length % 6 == 0) {
        tmp++;
        if (tmp < product_index.length / 6) {
          pages.push(page);
          page = [];
        }
      }
      if (food_list[i] == food_list[product_index.length - 1]) {
        pages.push(page);
      }
    }
  }

  pages[0].forEach(function (text) {
    food_display_list.innerHTML += text;
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

function textSP(food) {
  var text = `
        <div class="food-item">
          <div class="food-item-img-container">
            <img src='${food.image}' class="food-item-img"/>
          </div>
          <div class="food-item-info">
            <div class="food-item-name-rating">
              <p>${food.name}</p>
            </div>
            <p class="food-item-price">Giá ${food.price} VND</p>
            <button>
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
        `;
  return text;
}

function foodInputSearch() {
  food_search.addEventListener("input", (e) => {
    foodSearchItems = [];
    food_display_list.innerHTML = "";
    food_list.forEach((food) => {
      if (
        food.name.toLocaleLowerCase().includes(e.target.value.toLowerCase())
      ) {
        foodSearchItems.push(food);
      }
    });
    FoodItemsJoin();
  });
}

function foodMenuSearch() {
  document.querySelectorAll(".explore-menu-list-item").forEach((menu_list) =>
    menu_list.addEventListener("click", () => {
      foodMenuItems = [];
      food_list.forEach((food) => {
        if (
          explore_menu_category == "all" ||
          explore_menu_category == food.category
        ) {
          foodMenuItems.push(food);
        }
      });
      FoodItemsJoin();
    })
  );
}

function FoodItemsJoin() {
  let firstJoin = [];
  foodSearchItems.forEach((searchItems) => {
    foodMenuItems.forEach((menuItems) => {
      if (searchItems == menuItems) {
        firstJoin.push(searchItems);
      }
    });
  });
  food_to_display = firstJoin;
  food_display_list.innerHTML = "";
  food_to_display.forEach((food) => {
    food_display_list.innerHTML += textSP(food);
  });
  pagination.pagination()

}

