const pageButtonLinks = document.querySelectorAll(".admin-navbar-nav a")
const pages = document.querySelectorAll(".page")
let pageToDisplay
pages.forEach(page => {
    if(page.attributes.page.value == "user"){
        pageToDisplay = page
        
    }
})

export function pageDisplay(){
    removeAllPages()
    displayChoosenPage(pageToDisplay)
    
    pageButtonLinks.forEach(link => 
        link.addEventListener("click", () => displayChoosenPage(link)
        )
    )
}

function removeAllPages(){
    pages.forEach(page => page.style.display = "none"
    )
}


function displayChoosenPage(pageLink){

    removeAllPages()
    pages.forEach(page => {
        if(getPageValue(page) == getPageValue(pageLink)){
            page.style.display = "block"
    }})
}

function getPageValue(page){
    return page.attributes.page.value
}