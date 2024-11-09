export const food_list = [
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
  {
    id: 4,
    name: "Bánh mì trứng",
    image: "./images/lau ga.webp",
    price: 15000,
    description:
      "Bánh mì từ Pháp ăn kèm trứng",
    category: "Bánh mì",
  }
];

export const menu_list = [
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

export const cart_items = {};

export const adminNavbarLinks =[
  {
    page:"home",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>',
    text:"Trang chính"
  },
  {
    page:"user",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>',
    text:"Người dùng"
  },
  {
    page:"product",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 0C400 0 288 32 288 176l0 112c0 35.3 28.7 64 64 64l32 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 0-112 0-208c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7L80 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224.4c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16l0 134.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8L64 16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"/></svg>',
    text:"Sản phẩm"
  },
  {
    page:"shipping",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M112 0C85.5 0 64 21.5 64 48l0 48L16 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 208 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 160l-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 176 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 224l-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 144 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 288l0 128c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 96l0-48c0-26.5-21.5-48-48-48L112 0zM544 237.3l0 18.7-128 0 0-96 50.7 0L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"/></svg>',
    text:"Shipping"
  },
];

export const users =[
  {
    email: 'nguyenkhanh0127@gmail.com',
    userName: 'Khanh',
    password: '123456',
    roles: ['Nhan vien', 'Khach hang'],
    cart: [
      {
        name: 'Bún bò',
        quantity: 2
      }
    ]
  },
  {
    email: 'captianBao@gmail.com',
    userName: 'Bao',
    password: '123456',
    roles: ['Admin'],
    cart:[]
  },
  {
    email: 'ThanhTran1997@gmail.com',
    userName: 'Tran',
    password: '654321',
    roles: ['Khach hang'],
    cart: [
      {
        name: 'Bún bò',
        quantity: 1
      },
      {
        name: 'Cơm chiên dương châu',
        quantity: 1
      }
    ]
  }
]