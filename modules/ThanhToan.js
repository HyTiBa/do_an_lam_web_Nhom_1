import { foods } from "./chitietsp.js";
import { setLocalStorage } from "./informationalObjects.js";
import { getLocalStorage } from "./informationalObjects.js";
import { loginedUser } from "./signCode.js";
import { pageDisplay } from "./pageDisplay.js";
export let receipts
export function formThanhToan() {
    var btn_confirm = document.querySelector(".order_confirm");
    btn_confirm.addEventListener("click", () => {
        if (loginedUser == null) {
            alert("Bạn cần đăng nhập để thanh toán");
            document.querySelector(".popup-box").style.display = "flex";
        } else {
            if (check_final()) {
                return; 
            } else {
                let currentReceipts = getLocalStorage('receipts') || [];
                const today = new Date();
                const day = today.getDate().toString().padStart(2, '0');
                const month = (today.getMonth() + 1).toString().padStart(2, '0');
                const year = today.getFullYear();

                const hours = today.getHours();                 
                const minutes = today.getMinutes(); 
                const seconds = today.getSeconds(); 
                
                
                currentReceipts.push({
                    id: currentReceipts.length + 1,
                    Email: loginedUser.Email,
                    Address: document.querySelector(".input-text").value,
                    ArrayyFoods: foods,
                    TamTinh: parseInt(document.getElementById("thanh_toan_tmp_cal_money").textContent.split(" ")[0], 10),
                    PhiVanChuyen: parseInt(document.getElementById("phi_van_chuyen").textContent.split(" ")[0], 10),
                    TongCong: parseInt(document.getElementById("tong_cong").textContent.split(" ")[0], 10),
                    NgayMua: `${day}/${month}/${year}`,
                    GioMua: `${hours}:${minutes}:${seconds}`
                });

                setLocalStorage('receipts', currentReceipts);
                foods.splice(0, foods.length);
                document.querySelector(".dot").style.display = 'none';
                alert("Thanh toán thành công");
                pageDisplay();
                
            }
        }
    });
}

function check_final() {
    var check = false;
    var checkInput = document.querySelector(".input-text");
    var element_error = document.querySelector(".error");
    if (!checkInput.value.trim()) {
        if (element_error) {
            element_error.style.display = "block";
            element_error.innerText = "* Bắt buộc";
            check = true;
        }
    } else {
        element_error.style.display = "none";
    }
    return check;
}
