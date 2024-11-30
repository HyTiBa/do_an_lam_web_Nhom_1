import { getLocalStorage } from "./informationalObjects.js";
import { receipts } from "./ThanhToan.js";
import { loginedUser } from "./signCode.js";
import { users } from "./informationalObjects.js";

export function orderHistory(){
    function orderHistoryDisplay(){
        let board = document.querySelector('.overlay-orderHistory .orderHistory-container .history');
        
        let tmpReceipts = [];

        receipts.forEach((r) => {
            if(r.email === loginedUser.email){
                tmpReceipts.push(r);
            }
        })

        let productInfo = [];
        tmpReceipts.forEach((i) => {
            i.ArrayFood.forEach((j) => {
                let tmpObj ={
                    name: j.food.name,
                    quantity: j.soluong,
                    sum: j.food.price * j.soluong,
                    date: i.thoiGian
                }
                productInfo.push(tmpObj);
            })
        })

        console.log(productInfo);

        if(board){
            board.innerHTML=``;
           productInfo.forEach((item) => {
                board.innerHTML += `
                    <p>${item.name}</p>
                    <p>${item.quantity}</p>
                    <p>${item.sum}</p>
                    <p>${item.date}</p>
                    
                `
           })
        }
    }

    document.querySelector('#orderHistory-btn').addEventListener('click', () => {
        document.querySelector('.overlay-orderHistory').style.display = 'flex';
        document.querySelector('.sub-menu-wrap').style.display = 'none';
        orderHistoryDisplay();
    })

    document.querySelector('.overlay-orderHistory .close-btn').addEventListener('click', () => {
        document.querySelector('.overlay-orderHistory').style.display = 'none';
    })
}