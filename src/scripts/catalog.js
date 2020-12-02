export const catalog = (harvestedPlants) => {
    
    let catalogHtmlArray = []; 

    for (const plant of harvestedPlants) {

        
        let itemHTML = 
            `<section class="plant">${plant.type}</section>`
        
            catalogHtmlArray.push(itemHTML) 
    }
    const catalogHTML = catalogHtmlArray.join("")
    
    const contentElement = document.querySelector(".container")
    contentElement.innerHTML += catalogHTML

    return contentElement
}