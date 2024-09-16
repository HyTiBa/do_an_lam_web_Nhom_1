const menu_links = document.querySelectorAll(".navbar-menu a");
const explore_menu_list = document.querySelector(".explore-menu-list");
let explore_menu_category = "all";

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
    }
  });
});
