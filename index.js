import { menuListDisplay } from "./modules/menuList.js"
import { foodListDisplay } from "./modules/foodList.js"
import { pageDisplay } from "./modules/pageDisplay.js"
import { adminSidebarIconDisplay } from "./modules/adminSidebar.js"
import { adminUserBoardDisplay } from "./modules/adminUserBoard.js"
import { adminProductBoardDisplay } from "./modules/adminProductBoardDisplay.js"
import { signCode } from "./modules/signCode.js"
import {pagination} from "./modules/pagination.js"

adminSidebarIconDisplay()
pageDisplay()
menuListDisplay()
foodListDisplay()
adminUserBoardDisplay()
adminProductBoardDisplay()
signCode()
pagination();