let trocaImg = ["img/char.png", "img/bulba.png", "img/sqr.png"]

let img = document.getElementById("img")
img.style.width = "300px"
img.style.height = "300px"

let char = document.getElementById("char")
let bulba = document.getElementById("bulba")
let sqr = document.getElementById("sqr")

let para = document.getElementById("para")
let figu = document.getElementById("gif")
let evo1 = document.getElementById("evo1")
let evo2 = document.getElementById("evo2")
let evo3 = document.getElementById("evo3")
let texto = document.getElementById("text2")

let modal = document.getElementById("modal")
let modalTexto = document.getElementById("modal-texto")
let btnSim = document.getElementById("btnSim")
let btnNao = document.getElementById("btnNao")

let pokemonAtual = ""

function abrirModal(){
    modalTexto.innerText = "Você quer batalhar usando esse pokemon? "
    modal.style.display = "flex"
}

//  BOTÕES DO PROMPT
btnSim.addEventListener("click", () => {
    localStorage.setItem("pokemonEscolhido", pokemonAtual)
    window.location.href = "batalha.html"
})

btnNao.addEventListener("click", () => {
    modal.style.display = "none"
})


// BOTÕES DOS POKÉMON

char.addEventListener("click", () =>{
    pokemonAtual = "Charmander"

    img.src = trocaImg[0]
    para.innerText = "Charmander é um Pokémon do tipo fogo e um dos iniciais da região de Kanto. Ele é conhecido pela chama que fica na ponta de sua cauda, que representa sua energia e saúde. Quando evolui, torna-se Charmeleon e depois o poderoso Charizard. Charmander é corajoso, determinado e muito forte em batalhas contra Pokémon do tipo planta."
    figu.style.display = "block"
    evo1.src = "img/gif-char.gif"
    evo2.src = "img/cm-gif.gif"
    evo3.src = "img/chari.png"
    texto.innerText ="Evoluções do Charmander"
})

bulba.addEventListener("click", () =>{
    pokemonAtual = "Bulbasaur"

    img.src = trocaImg[1]
    para.innerText = "Bulbassauro é um Pokémon do tipo planta e veneno. Ele carrega uma semente em suas costas, que cresce conforme ele evolui para Ivysaur e depois para Venusaur. Esse Pokémon usa ataques baseados em plantas, como cipós e folhas afiadas. Bulbassauro é equilibrado, resistente e muito eficiente em batalhas contra Pokémon do tipo água."
    figu.style.display = "block"
    evo1.src = "img/bul.gif"
    evo2.src = "img/ivy.png"
    evo3.src = "img/venu.png"
    texto.innerText ="Evoluções do Bulbasaur"
})

sqr.addEventListener("click", () =>{
    pokemonAtual = "Squirtle"

    img.src = trocaImg[2]
    para.innerText = "Squirtle é um Pokémon do tipo água e também um dos iniciais de Kanto. Ele tem aparência de uma pequena tartaruga azul e usa seu casco tanto para defesa quanto para se proteger de ataques. Squirtle evolui para Wartortle e depois para Blastoise. Ele é excelente contra Pokémon do tipo fogo e é conhecido por sua personalidade leal e estratégica."
    figu.style.display = "block"
    evo1.src = "img/a.png"
    evo2.src = "img/war.png"
    evo3.src = "img/blas.png"
    texto.innerText ="Evoluções do Squirtle"
})


// CLICAR NA IMAGEM PARA ABRIR O PROMPT

img.addEventListener("click", () =>{
    if(pokemonAtual !== ""){
        abrirModal(pokemonAtual)
    }
})
