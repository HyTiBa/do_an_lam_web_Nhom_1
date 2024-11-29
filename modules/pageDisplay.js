const pages = document.querySelectorAll(".page")

export function pageDisplay(){
    const pageButtonLinks = document.querySelectorAll(".pageButtonLink");
    
    let pageToDisplay
    pages.forEach(page => {
        if(page.attributes.page.value == "home"){
            pageToDisplay = page
            
        }
    })
    
    removeAllPages()
    displayChoosenPage(pageToDisplay)
    
    pageButtonLinks.forEach(link =>    {
        link.addEventListener("click",displayChoosenPage)
        link.removeEventListener("click",displayChoosenPage)
    }
        
    )
}

function removeAllPages(){
    pages.forEach(page => page.style.display = "none"
    )
}


export function displayChoosenPage(pageLink){
    
    pages.forEach(page => {
        if(getPageValue(page) == getPageValue(pageLink)){
            removeAllPages()
            page.style.display = "block"
    }})
}

function getPageValue(page){
    return page.attributes.page.value
}