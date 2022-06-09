function importThings() {
    const headerEl = document.querySelector(".main")
    importHeader(headerEl)
    
    const footerEl = document.querySelector(".footer")
    importFooter(footerEl)
    
    const formEl = document.querySelector(".form")
    importForm(formEl)
}

function getWelcome(){
    const apiURL = new URL(
      "https://cdn.contentful.com/spaces/1kcpq4cdqvpo/environments/master/entries/?access_token=8t2ILVt0J-hwcOSPX19ujlLFYt8sAPQY5ghYHveEqrw&content_type=welcome"
    );
    
    return fetch(apiURL)
    .then((res) => {
        return res.json();
    })
    .then((json) => {
        const objeto={
            mainTitle: json.items[0].fields.welcomeH1,
            subTitle: json.items[0].fields.welcomePresentacionH2,
            text: json.items[0].fields.welcomePresentacionText,
            servicesTitle: json.items[0].fields.welcomeServicesTitle
            
        }
        return objeto
    })
}

function getHomeServiciosCard(){
    const apiURL = new URL(
        "https://cdn.contentful.com/spaces/1kcpq4cdqvpo/environments/master/entries/?access_token=8t2ILVt0J-hwcOSPX19ujlLFYt8sAPQY5ghYHveEqrw&content_type=welcomeServiciosCard"
        );
        
        return fetch(apiURL)
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            const cardCollection = json.items.map(el=>{
                return {
                    servicesTitleCard: el.fields.wServiciosCardTitle,
                    servicesTextCard: el.fields.wServiciosCardText,
                    servicesImageCard: json.includes.Asset[0].fields.file.url,
                }
            })
            return cardCollection
        });
}

function addWelcome(obj){
    const introTitleEl = document.querySelector(".intro__title")
    introTitleEl.textContent = obj.mainTitle
    
    const introSubtitleEl = document.querySelectorAll(".soy-erik")
    introSubtitleEl.forEach(element => {
    element.textContent = obj.subTitle
    
    const presentacionTextEl = document.querySelector(".presentacion__text")
    presentacionTextEl.textContent = obj.text

    const servicesTitleEl = document.querySelector(".servicios__title")
    servicesTitleEl.textContent = obj.servicesTitle
    });
}

function addHomeServiciosCard(obj){
    const container = document.querySelector(".servicios__container-cards")
    const template  = document.querySelector(".template")

    const titleEl = template.content.querySelector(".card__title")
    titleEl.textContent = obj.servicesTitleCard
    const textEl  = template.content.querySelector(".card__text")
    textEl.textContent = obj.servicesTextCard
    const imgEl = template.content.querySelector(".card__img")
    imgEl.src = obj.servicesImageCard

    const clone = template.content.cloneNode(true)
    container.appendChild(clone)
}

function main(){
    importThings()
    getWelcome()
        .then(res => {
            addWelcome(res)
        })
    getHomeServiciosCard()
        .then(res => {
            for ( r of res) {
                addHomeServiciosCard(r)
            }
        })
}
main()