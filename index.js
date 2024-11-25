import { menuListDisplay } from "./modules/menuList.js"
import { foodListDisplay } from "./modules/foodList.js"
import { pageDisplay } from "./modules/pageDisplay.js"
import { adminSidebarIconDisplay } from "./modules/adminSidebar.js"
import { adminUserBoardDisplay } from "./modules/adminUserBoard.js"
import { adminProductBoardDisplay } from "./modules/adminProductBoardDisplay.js"
import { signCode } from "./modules/signCode.js"
import {pagination} from "./modules/pagination.js"
import { adminUserManage } from "./modules/adminUserManage.js"
import * as cart from "./modules/cart.js"
import * as ThanhToan from "./modules/ThanhToan.js";
adminSidebarIconDisplay()
menuListDisplay()
foodListDisplay()
adminUserBoardDisplay()
adminProductBoardDisplay()
signCode()
adminUserManage()
pagination();
cart.showCart();
pageDisplay()
ThanhToan.formThanhToan();

export function log(text){
    console.log(text)
}