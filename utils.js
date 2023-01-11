function renderPlayer(obj) {

  function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }

  const playerElement = document.querySelector(obj.id);
  let actions = [];
  let buttons = [];
  Object.getOwnPropertyNames(Object.getPrototypeOf(obj)).forEach((prop) => {
    if ( typeof obj[prop] === 'function' && prop.startsWith("action")) {
      let name = prop.toString().substring("action".length).toLowerCase()
      actions.push(name)
      buttons = buttons + `<button class="${name}">${capitalize(name)}</button>`
    }
  })

  let stats = ""
  Object.getOwnPropertyNames(obj).forEach((prop) => {
    if (prop.startsWith("stats")) {
      let name = capitalize(prop.substring("stats".length))
      stats = stats + `<p>${name}: ${obj[prop]}</p>`
    }
  })
  
  playerElement.innerHTML = `
        <h2>${obj.name}</h2>
        ${stats}
        ${buttons}`;

  actions.forEach((a) => {
    playerElement
    .querySelector(`.${a}`)
    .addEventListener("click", () => {
      obj[`action${capitalize(a)}`]()
    });
  })
}

let errorTimeout = null

function errorLog(msg) {
  const err = document.querySelector("#err-msg");
  err.addEventListener('click', () => err.style.display = "none")
  err.textContent = msg;
  err.style.display = "flex";
  if (errorTimeout) {
    clearTimeout(errorTimeout)
    errorTimeout = null
  }
  errorTimeout = setTimeout(() => (err.style.display = "none"), 5000);
}
