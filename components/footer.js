function importFooter(el){
    const divEl = document.createElement("div")
    divEl.innerHTML=
    `
    <div class="footer__div">
        <h2 class="footer__logo">Erik</h2>
        <div class="footer__container-redes-sociales">
            <div class="footer__red-social">
                <a href="" class="footer__red-social-link">Instagram</a>
                <img src="./Images/instagram.svg" alt="" class="footer__red-social-logo">
            </div>
            <div class="footer__red-social">
                <a href="" class="footer__red-social-link">Linkedin</a>
                <img src="./Images/linkedin.svg" alt="" class="footer__red-social-logo">
            </div>
            <div class="footer__red-social">
                <a href="" class="footer__red-social-link">Github</a>
                <img src="./Images/github.svg" alt="" class="footer__red-social-logo">
            </div>
        </div>
    </div>
    `

    el.appendChild(divEl)
}