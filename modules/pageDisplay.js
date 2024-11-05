const pages = document.querySelectorAll(".page")

export function pageDisplay(){
    const pageButtonLinks = document.querySelectorAll(".admin-navbar-nav a")
    let pageToDisplay
    pages.forEach(page => {
        if(page.attributes.page.value == "product"){
            pageToDisplay = page
            
        }
    })
    
    removeAllPages()
    displayChoosenPage(pageToDisplay)
    
    pageButtonLinks.forEach(link => link.addEventListener("click", () => displayChoosenPage(link)
    )
    )
}

function removeAllPages(){
    pages.forEach(page => page.style.display = "none"
    )
}


function displayChoosenPage(pageLink){

    pages.forEach(page => {
        if(getPageValue(page) == getPageValue(pageLink)){
            removeAllPages()
            page.style.display = "block"
    }})
}

function getPageValue(page){
    return page.attributes.page.value
}