const menu_links = document.querySelectorAll(".navbar-menu a");
const food_item_counter = document.querySelector(".counter");
const explore_menu_list = document.querySelector(".explore-menu-list");
const food_display_list = document.querySelector(".food-display-list");
let explore_menu_category = "all";

const cart_items = {};

const food_list = [
  {
    id: 1,
    name: "Cơm chiên dương châu",
    image: "./images/com chien duong chau.jpg",
    price: 35000,
    description:
      "Là món cơm chiên Việt Nam hấp dẫn với tôm, xúc xích, trứng và rau, được nêm nếm hoàn hảo để tạo nên một bữa ăn đậm đà hương vị.",
    category: "Cơm chiên",
  },
  {
    id: 2,
    name: "Bún bò",
    image: "./images/bun bo.jpg",
    price: 35000,
    description:
      "Là một ăn đậm đà của Việt Nam với thịt bò mềm, bún và các loại thảo mộc thơm trong nước dùng cay nồng.",
    category: "Bún",
  },
  {
    id: 3,
    name: "Lẩu gà",
    image: "./images/lau ga.webp",
    price: 80000,
    description:
      "món lẩu gà của Việt Nam, gồm thịt gà mềm, rau và thảo mộc được ninh trong nước dùng đậm đà, ăn kèm với mì hoặc cơm.",
    category: "Lẩu",
  },
];

const menu_list = [
  {
    menu_name: "Cơm chiên",
    menu_image: "./images/com chien.jpg",
  },
  {
    menu_name: "Lẩu",
    menu_image: "./images/lau.jpg",
  },
  {
    menu_name: "Bún",
    menu_image: "./images/bun.jpg",
  },
  {
    menu_name: "Bánh mì",
    menu_image: "./images/banh mi.jpg",
  },
  {
    menu_name: "Hải sản",
    menu_image: "./images/hai san.jpg",
  },
  {
    menu_name: "Tráng miệng",
    menu_image: "./images/trang mieng.jpg",
  },
];

menu_list.forEach((item) => {
  explore_menu_list.innerHTML += `
    <div class="explore-menu-list-item">
          <img src="${item.menu_image}" />
          <p>${item.menu_name}</p>
        </div>
    `;
});

const explore_menu_list_items_image = document.querySelectorAll(
  ".explore-menu-list-item img"
);
const explore_menu_list_items = document.querySelectorAll(
  ".explore-menu-list-item"
);

menu_links.forEach((link) =>
  link.addEventListener("click", () => {
    menu_links.forEach((link) => link.classList.remove("active"));
    link.classList.add("active");
  })
);

explore_menu_list_items.forEach((item) => {
  const item_image = item.querySelector("img");
  const item_p = item.querySelector("p");

  item_image.addEventListener("click", () => {
    if (explore_menu_category != item_p.innerHTML) {
      explore_menu_list_items_image.forEach((image) =>
        image.classList.remove("active")
      );
      item_image.classList.add("active");
      explore_menu_category = item_p.innerHTML;
    } else {
      explore_menu_list_items_image.forEach((image) =>
        image.classList.remove("active")
      );
      explore_menu_category = "all";
    }
    load_food_items_display();
  });

  item_p.addEventListener("click", () => {
    if (explore_menu_category != item_p.innerHTML) {
      explore_menu_list_items_image.forEach((image) =>
        image.classList.remove("active")
      );
      item_image.classList.add("active");
      explore_menu_category = item_p.innerHTML;
    } else {
      explore_menu_list_items_image.forEach((image) =>
        image.classList.remove("active")
      );
      explore_menu_category = "all";
      load_food_items_display();
    }
  });
});

load_food_items_display();

function load_food_items_display() {
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

function add_to_cart(id) {
  if (!cart_items[id]) {
    cart_items[id] = 1;
  } else {
    cart_items[id] += 1;
  }
  load_food_items_display();
  console.log(cart_items);
}
function remove_from_cart(id) {
  cart_items[id] -= 1;
  console.log(cart_items);

  load_food_items_display();
}
let cart = [];

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceContainer = document.getElementById("total-price");

    cartItemsContainer.innerHTML = "";
    let totalPrice = 0;

    cart.forEach((item, index) => {
        const itemElement = document.createElement("li");
        itemElement.textContent = `${item.name} - ${item.price.toLocaleString()} VND`;
        
        const removeButton = document.createElement("button");
        removeButton.textContent = "Xóa";
        removeButton.onclick = () => removeFromCart(index);
        
        itemElement.appendChild(removeButton);
        cartItemsContainer.appendChild(itemElement);
        
        totalPrice += item.price;
    });

    totalPriceContainer.textContent = `Tổng tiền: ${totalPrice.toLocaleString()} VND`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}
