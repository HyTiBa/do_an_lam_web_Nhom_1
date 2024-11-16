import * as foodList from "./foodList.js";

const food_display_list = document.querySelector(".food-display-list");
    
var elementPageNumber = document.getElementById("pageNumber");
//elementPageNumber.innerText = foodList.pages.length;

var currentPage = 0;
export function pagination(){
    
    var nextPage = document.querySelector(".next");
    if(nextPage){
        nextPage.addEventListener("click", function(){
            food_display_list.innerHTML = "";
            currentPage++;
            if(currentPage<foodList.pages.length){
                foodList.pages[currentPage].forEach(item=>{
                    food_display_list.innerHTML += item;    
                }); 
            }
            else{
                currentPage = foodList.pages.length - 1;
                foodList.pages[currentPage].forEach(item=>{
                    food_display_list.innerHTML += item;    
                }); 
            }
        });
    }

    var backPage = document.querySelector(".back");
    if(backPage){
        backPage.addEventListener("click", function(){
            food_display_list.innerHTML = "";
            currentPage--;
            if(currentPage>0){
                foodList.pages[currentPage].forEach(item=>{
                    food_display_list.innerHTML += item;    
                }); 
            }
            else{
                currentPage = 0;
                foodList.pages[currentPage].forEach(item=>{
                    food_display_list.innerHTML += item;    
                }); 
            }
        });
    }

}






pagination();



