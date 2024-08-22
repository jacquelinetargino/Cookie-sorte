const openCookie = document.querySelector("#buttonIMG")
const tryAgain = document.querySelector("#button2")
const modalWrapper = document.querySelector(".modal-wrapper")
const modalWrapper2 = document.querySelector(".modal-wrapper2")
const pModal2 = document.querySelector("#p-modal2") 
const messages = [
    "Hoje é um ótimo dia para começar algo novo!",
    "Você encontrará a felicidade onde menos espera.",
    "O sucesso está a caminho, continue se esforçando!",
    "És um exemplo de mulher trabalhadora, mamãe.",
    "Sua atitude positiva será recompensada.",
    "Acredite em si mesmo e em suas habilidades.",
    "Obrigado por cada sacrifício, cada sorriso, cada abraço, mamãe.",
    "Você é melhor mãe do que imagina ser.",
    "É preciso ser muito especial para colocar, como prioridade, um outro alguém, uma nova vida. Você, mamãe, fez isto do melhor jeito possível, garantindo a minha felicidade diária.",
    "Mãe, pretendo esforçar-me toda a vida para retribuir muito do que você já meu deu.",
];
function hideToggle(){
    modalWrapper.classList.toggle("hide")
    modalWrapper2.classList.toggle("hide")
}

function randomMessage(){
    const randomIndex = Math.floor(Math.random() * messages.length)
    const message = messages[randomIndex]
    pModal2.innerText = (`${message}`)
}

openCookie.addEventListener("click", hideToggle)
openCookie.addEventListener("click", randomMessage)
tryAgain.addEventListener("click", hideToggle)