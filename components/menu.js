function menuFunctions(){
    const botonAbreVentanaEl = document.querySelector('.menu-header__boton')
    const botonCierraVentanaEl = document.querySelector(".menu-header-desplegado__container-boton-cerrar")
    const ventanaEl = document.querySelector(".menu-header-desplegado")

    botonAbreVentanaEl.addEventListener("click",()=>{
        ventanaEl.style.display= "inherit"
    })
    botonCierraVentanaEl.addEventListener("click",()=>{
        ventanaEl.style.display= ""
    })
}

function importMenu(el){
    const divEl = document.createElement("div");
    divEl.innerHTML = 
    `
    <div class="menu-header">
        <div class="menu-header__boton">
            <div class="menu-header__rectangulo"></div>
            <div class="menu-header__rectangulo"></div>
            <div class="menu-header__rectangulo"></div>
        </div>
        <div class="menu-header-desplegado">
            <div class="menu-header-desplegado__container-boton-cerrar">
                <span class="menu-header-desplegado__boton-cerrar">X</span>
            </div>
                <div class="menu-header-desplegado__container-links">
                    <a href="../portfolio.html" class="menu-header-desplegado__link">Portfolio</a>
                    <a href="../servicios.html" class="menu-header-desplegado__link">Servicios</a>
                    <a href="../contactos.html" class="menu-header-desplegado__link">Contacto</a>
                </div>
        </div>
    </div>
    `
    el.appendChild(divEl)
    
    menuFunctions()
}
