import logo from './logo.png';
import search_icon from './search.png'
import com_chien from './com chien.jpg'
import lau from './lau.jpg'
import bun from './bun.jpg'
import banh_mi from './banh mi.jpg'
import hai_san from './hai san.jpg'
import cart_icon from './shopping-cart.png'
import trang_mieng from './trang mieng.jpg'
import com_chien_duong_chau from './com chien duong chau.jpg'
import bun_bo from './bun bo.jpg'
import star_0 from './0-star.png'
import star_1 from './1-star.png'
import star_2 from './2-star.png'
import star_3 from './3-star.png'
import star_4 from './4-star.png'
import star_5 from './5-star.png'
import star_0_5 from './0-5-star.png'
import star_1_5 from './1-5-star.png'
import star_2_5 from './2-5-star.png'
import star_3_5 from './3-5-star.png'
import star_4_5 from './4-5-star.png'
import cross from './cross.png'
import lau_ga from './lau ga.webp'
export const star_rating = [star_0,star_0_5,star_1,star_1_5,star_2,star_2_5,star_3,star_3_5,star_4,star_4_5,star_5]
export const assets = {
    logo,
    cross,
    search_icon,
    cart_icon
}
export const menu_list = [
    {
        menu_name: "Cơm chiên",
        menu_image: com_chien
    },
    {
        menu_name: "Lẩu",
        menu_image: lau
    },
    {
        menu_name: "Bún",
        menu_image: bun
    },
    {
        menu_name: "Bánh mì",
        menu_image: banh_mi
    },
    {
        menu_name: "Hải sản",
        menu_image: hai_san
    },
    {
        menu_name: "Tráng miệng",
        menu_image: trang_mieng
    },
]
export const food_list = [
    {
        id: 1,
        name: "Cơm chiên dương châu",
        image: com_chien_duong_chau,
        price:35000,
        description: "Là món cơm chiên Việt Nam hấp dẫn với tôm, xúc xích, trứng và rau, được nêm nếm hoàn hảo để tạo nên một bữa ăn đậm đà hương vị.",
        category:"Cơm chiên",
    },
    {
        id: 2,
        name: "Bún bò",
        image: bun_bo,
        price: 35000,
        description:"Là một ăn đậm đà của Việt Nam với thịt bò mềm, bún và các loại thảo mộc thơm trong nước dùng cay nồng.",
        category:"Bún",
    },
    {
        id: 3,
        name: "Lẩu gà",
        image: lau_ga,
        price: 80000,
        description: "món lẩu gà của Việt Nam, gồm thịt gà mềm, rau và thảo mộc được ninh trong nước dùng đậm đà, ăn kèm với mì hoặc cơm.",
        category: "Lẩu",
    }
]