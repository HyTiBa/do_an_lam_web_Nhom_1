const board = document.querySelector(".analyticBoard");
const topOverviewElement = document.querySelectorAll(
  ".adminAnalytics .overview > div"
);
const incomeElement = topOverviewElement[0].children[0].children[1];
const orderElement = topOverviewElement[1].children[0].children[1];
const userElement = topOverviewElement[2].children[0].children[1];
const productElement = topOverviewElement[3].children[0].children[1];
const inputDate = document.querySelector(`.adminAnalytics input`);
let datesPrinted = [];
let day;
let year;
let month;
import { food_list, users } from "./informationalObjects.js";
import { receipts } from "./ThanhToan.js";
export function adminAnalyticsLogic() {
  const analyticButtonLink = document.querySelector(`a[page ="analytics"]`);
  analyticButtonLink.addEventListener("click", () => {
    reCalculateAnalyticsPage();
  });
  analyticBoardDisplay();
  dateFilterLogic();
}

function analyticBoardDisplay() {
  if (receipts != null) {
    receipts.forEach((receipt) => {
      if (dateAlreadyExist(receipt.thoiGian) == false) {
        board.innerHTML += `
                 <div class="row">
                      <p>${receipt.thoiGian.getDate()}/${receipt.thoiGian.getMonth()}/${receipt.thoiGian.getFullYear()}</p>
                      <p>${receipt.TongCong()}đ</p>
                    </div>
                `;
      }
    });
  }
}

function reCalculateAnalyticsPage() {
  incomeElement.innerHTML = `${sumtotal()}đ`;
  if (receipts == null) {
    orderElement.innerHTML = 0;
  } else {
    orderElement.innerHTML = `${receipts.length}`;
  }
  userElement.innerHTML = `${users.length}`;
  productElement.innerHTML = `${food_list.length}`;
  function sumtotal() {
    let total = 0;
    if (receipts != null) {
      receipts.forEach((receipt) => {
        total += receipt.TongCong();
      });
    }
    return total;
  }
}

function dateAlreadyExist(date) {
  datesPrinted.forEach((datePrint) => {
    if (
      datePrint.year == date.getFullYear() &&
      datePrint.month == date.getMonth() &&
      datePrint.day == date.getDate()
    ) {
      return true;
    }
  });
  setDatePrinted(date);
  return false;
}

function setDatePrinted(date) {
  let newDate = {};
  newDate.day == date.getDate;
  newDate.month == date.getMonth;
  newDate.year == date.getFullYear;
  datesPrinted.push(newDate);
}

function dateFilterLogic() {
  inputDate.addEventListener("change", () => {
    getCalendar(inputDate.value);
  });
}

function getCalendar(date) {
  day = "";
  month = "";
  year = "";
  for (let index = 0; index < 4; index++) {
    year += date[index];
  }
  for (let index = 5; index < 7; index++) {
    month += date[index];
  }
  for (let index = 8; index < 10; index++) {
    day += date[index];
  }
}
