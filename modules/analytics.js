const board = document.querySelector(".analyticBoard")
const topOverviewElement = document.querySelectorAll(".adminAnalytics .overview > div")
const incomeElement = topOverviewElement[0].children[0].children[1]
const orderElement = topOverviewElement[1].children[0].children[1]
const userElement = topOverviewElement[2].children[0].children[1]
const productElement = topOverviewElement[3].children[0].children[1]
let datesPrinted = []
import { food_list, users } from "./informationalObjects.js"
import { receipts } from "./ThanhToan.js"
export function adminAnalyticsLogic(){
    const analyticButtonLink = document.querySelector(`a[page ="analytics"]`)
    analyticButtonLink.addEventListener("click", () => {
    reCalculateAnalyticsPage()
   });
   analyticBoardDisplay()
   
   


}

function analyticBoardDisplay(){
    if(receipts != null){

        receipts.forEach(receipt => {
            
            if(dateAlreadyExist(receipt.thoiGian) == false){
                board.innerHTML += `
                 <div class="row">
                      <p>${receipt.thoiGian.getDate()}/${receipt.thoiGian.getMonth()}/${receipt.thoiGian.getFullYear()}</p>
                      <p>${receipt.TongCong()}đ</p>
                    </div>
                `
            }
        })

    }





}

function reCalculateAnalyticsPage(){
incomeElement.innerHTML = `${sumtotal()}đ`
if (receipts == null) {
    orderElement.innerHTML = 0
}
else{

    orderElement.innerHTML = `${receipts.length}`
}
userElement.innerHTML = `${users.length}`
productElement.innerHTML = `${food_list.length}`
function sumtotal(){
    let total = 0
    if (receipts != null) {
        
        receipts.forEach(receipt => {
            total += receipt.TongCong()
        })
    }
    return total
}
}

function dateAlreadyExist(date){
    datesPrinted.forEach(datePrint => {
        if(datePrint.year == date.getFullYear() && datePrint.month == date.getMonth() && datePrint.day == date.getDate()){
            return true
        }
    })
    setDatePrinted(date)
return false}

function setDatePrinted(date){
    let newDate = {}
    newDate.day == date.getDate
    newDate.month == date.getMonth
    newDate.year == date.getFullYear
    datesPrinted.push(newDate)
}