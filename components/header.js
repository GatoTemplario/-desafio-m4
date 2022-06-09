function importHeader(el){
    const divEl =document.createElement("div")
    divEl.innerHTML = 
    `
    <div class="header">
    <div class="header__upper-container">
    <a href="../index.html" class="header__logo">Erik</a>
    <div class="header__menu"></div>
    </div>
    </div>
    `
   
    el.appendChild(divEl)
    
    // importo el script de menu
    const containerEl = document.querySelector(".header__menu")
    importMenu(containerEl)
}

