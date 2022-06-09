async function postData(data) {
    const dataToJson = JSON.parse(data)
    // https://webhook.site/216c99e3-7922-4126-beb3-39260a9538c2
    fetch("https://apx-api.vercel.app/api/utils/dwf", {
        method: "POST", 
        headers: { "content-type": "application/json" },
        cors: "no-cors",
        body: JSON.stringify({
            // name: dataToJson.nombre,
            to: dataToJson.email,
            message: dataToJson.Mensaje,
    }),
  });
}

function handleData(event) {
  event.preventDefault();

  const data = new FormData(event.target);
  const value = Object.fromEntries(data.entries());
  const result = JSON.stringify(value, null, 2);

  console.log("listo el result!", result);
  alert("Datos enviado! Te voy a contactar mas tarde. Gracias!")
  postData(result);
}

function importForm(el) {
  const divEl = document.createElement("div");
  divEl.innerHTML = `
<form action="">
    <div class="form">
        <h1 class="form__title">Escribime</h1>
        <div class="form__container">
            <label for="nombre" class="form__label">
                <span>Nombre</span>
                <input name="nombre" type="text" class="form__input">
            </label>
    
            <label class="form__label">
                <span>E-mail</span>
                <input name="email" type="email" class="form__input">
            </label>
    
            <label class="form__label">
                <span>Mensaje</span>
                <textarea name="Mensaje" id="" cols="0" rows="0" class="form__textarea"></textarea>
            </label>
            
            <button class="form__boton">Enviar</button>
        </div>
    </div>
</form>
`;

  el.appendChild(divEl);

  const form = document.querySelector("form");
  form.addEventListener("submit", handleData);
}
