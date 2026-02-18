let hpUsua = document.getElementById("hp")
let hpCpu = document.getElementById("hp-cpu")



let imgJogador = document.getElementById("poke-joga")
let imgCpu = document.getElementById("poke-cpu")

let pokemon = document.getElementById("pokemon")
let pokeAdver = document.getElementById("poke-adver")
let pokemonEscolhido = localStorage.getItem("pokemonEscolhido")

let atacar = document.getElementById("ataque")
let grade = document.getElementById("ataques")
let opcoes = document.getElementById("opcoes")
let voltar = document.getElementById("voltar")

let vidaJogador = 100;
let vidaInimigo = 100;

let turno = "player"; 
let ataqueUm = document.getElementById("ataqueUm")
let ataqueDois = document.getElementById("ataqueDois")

let modal = document.getElementById("modal")
let modalTexto = document.getElementById("modal-texto")
let btnSim = document.getElementById("btnSim")
let btnNao = document.getElementById("btnNao")

if (pokemonEscolhido === "Charmander") {
    ataqueUm.innerText = "Tackle"
    ataqueDois.innerText = "Ember"
    pokemon.innerText = "Charmander"
    imgJogador.src = "img/charmander-batalha.png"
    imgJogador.style.width = "200px"
    imgJogador.style.height = "200px"

}else if(pokemonEscolhido === "Squirtle"){
     ataqueUm.innerText = "Tackle"
    ataqueDois.innerText = "Water gun"
     pokemon.innerText = "Squirtle"
    imgJogador.src = "img/squirtle-adversario-removebg-preview.png"
    imgJogador.style.width = "200px"
    imgJogador.style.height = "200px"
}
else{
     ataqueUm.innerText = "Tackle"
    ataqueDois.innerText = "Razor life"
     pokemon.innerText = "Bulbassauro"
    imgJogador.src = "img/bulba.png"
    imgJogador.style.width = "200px"
    imgJogador.style.height = "200px"
}




atacar.addEventListener("click", ()=>{
    
    grade.style.display = "none"
    opcoes.style.display = "grid"
})
voltar.addEventListener("click", ()=>{
    opcoes.style.display = "none"
    grade.style.display = "grid"
})
function atualizarTela() {
    if (vidaJogador < 0) vidaJogador = 0;
if (vidaInimigo < 0) vidaInimigo = 0;
if(vidaJogador < 50){
    hpUsua.style.backgroundColor = "yellow"
}
if(vidaJogador < 30){
    hpUsua.style.backgroundColor = "red"

}
if(vidaInimigo < 50){
    hpCpu.style.backgroundColor = "yellow"
}
if(vidaInimigo < 30){
    hpCpu.style.backgroundColor = "red"

}
hpUsua.innerText = vidaJogador;
hpCpu.innerText = vidaInimigo;
}

function ataqueJogador(dano){
    if(turno !== "player") return;
    vidaInimigo -= dano
    atualizarTela()
    
    if(vidaInimigo <= 0){
        abrirModal()
        return
    }
    turno = "cpu";
    setTimeout(ataqueInimigo, 1000);
}

function ataqueInimigo() {
    let dano = 8;
    vidaJogador -= dano;

    atualizarTela();

    if (vidaJogador <= 0) {
        alert("Você perdeu!");
        return;
    }

    turno = "player";
}

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
