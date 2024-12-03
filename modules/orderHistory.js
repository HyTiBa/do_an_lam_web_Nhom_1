import { getLocalStorage } from "./informationalObjects.js";
import { loginedUser } from "./signCode.js";
//import { receipts } from "./informationalObjects.js";
import { users } from "./informationalObjects.js";

export function orderHistory(){
    function orderHistoryDisplay(){

        let receipts = getLocalStorage('receipts');

        if(!receipts){
            console.log('Hello World');
        }
        let board = document.querySelector('.overlay-orderHistory .orderHistory-container .history');

        let tmpReceipts = [];

        receipts.forEach((r) => {
            if(r.Email === loginedUser.email){
                tmpReceipts.push(r);
            }
        })

        let productInfo = [];
        tmpReceipts.forEach((i) => {
            i.ArrayyFoods.forEach((j) => {
                let tmpObj ={
                    name: j.food.name,
                    quantity: j.soluong,
                    sum: j.food.price * j.soluong,
                    date: i.NgayMua
                }
                productInfo.push(tmpObj);
            })
        })

        console.log(productInfo);

        if(board){
            board.innerHTML=``;
            productInfo.forEach((item) => {
                let today = new Date(item.date);
                const day = today.getDate().toString().padStart(2, '0');
                const month = (today.getMonth() + 1).toString().padStart(2, '0');
                const year = today.getFullYear();

                const hours = today.getHours();                 
                const minutes = today.getMinutes(); 
                const seconds = today.getSeconds();

                board.innerHTML += `
                    <p>${item.name}</p>
                    <p>${item.quantity}</p>
                    <p>${item.sum}</p>
                    <p>${day}/${month}/${year} ${hours}:${minutes}:${seconds}</p>
                    
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