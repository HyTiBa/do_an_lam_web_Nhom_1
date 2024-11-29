import { receipts, users } from "./informationalObjects.js";

export function adminOrderLogic(){
orderBoardDisplay()
}

function orderBoardDisplay(){
    receipts.forEach(receipt => {
        let buyer
        users.forEach(user => {
            if(receipt.email == user.email){
                buyer = user
            }
        })
        
        
    })
}

function removeReceipt(){
    
}