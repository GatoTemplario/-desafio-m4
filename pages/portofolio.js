  function importThings() {
    const headerEl = document.querySelector(".main");
    importHeader(headerEl);

    const footerEl = document.querySelector(".footer");
    importFooter(footerEl);
  }

function getPortfolio() {
  const apiURL = new URL(
    "https://cdn.contentful.com/spaces/1kcpq4cdqvpo/environments/master/entries/?access_token=8t2ILVt0J-hwcOSPX19ujlLFYt8sAPQY5ghYHveEqrw&content_type=portfolioCard"
  );
  return fetch(apiURL)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      const array = json.items;
      const cardCollection = array.map((item) => {
        return {
          title: item.fields.portfolioTitle,
          text: item.fields.portfolioText.content[0].content[0].value,
          url: item.fields.portfolioText.content[1].content[1].data.uri,
          imageURL: json.includes.Asset[0].fields.file.url,
        };
      });

      console.log(cardCollection);
      return cardCollection;
    });
}

function addPortfolioCard(result = {}) {
  const works = document.querySelector(".works");
  const template = document.querySelector(".template");

  const titleEl = template.content.querySelector(".card__title");
  titleEl.textContent = result.title;

  const pEl = template.content.querySelector(".card__text");
  pEl.textContent = result.text;

  const anchorEl = template.content.querySelector(".card__url");
  anchorEl.href = result.url;

  const imgEl = template.content.querySelector(".card__img");
  imgEl.src = result.imageURL;

  const clone = template.content.cloneNode(true);
  works.appendChild(clone);
}
function main() {
  importThings();
  getPortfolio().then((works) => {
    for (const w of works) {
      addPortfolioCard(w);
    }
  });
}

main();
