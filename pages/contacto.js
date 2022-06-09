function importThings() {
    const headerEl = document.querySelector(".main");
    importHeader(headerEl);

    const footerEl = document.querySelector(".footer");
    importFooter(footerEl);

    const formEl = document.querySelector(".form-section")
    importForm(formEl)
}

function main(){
    importThings()

    const h1El = document.querySelector(".form__title")
    h1El.innerHTML="Contacto"
}
main()