let hpUsua = document.getElementById("hp")
let hpCpu = document.getElementById("hp-cpu")
let imgJogador = document.getElementById("poke-joga")
let imgCpu = document.getElementById("poke-cpu")
let pokemon = document.getElementById("pokemon")
let pokeAdver = document.getElementById("poke-adver")
let pokemonEscolhido = localStorage.getItem("pokemonEscolhido")
let atacar = document.getElementById("ataque")


if (pokemonEscolhido === "Charmander") {
    pokemon.innerText = "Charmander"
    imgJogador.src = "img/charmander-batalha.png"
    imgJogador.style.width = "200px"
    imgJogador.style.height = "200px"

}else if(pokemonEscolhido === "Squirtle"){
     pokemon.innerText = "Squirtle"
    imgJogador.src = "img/squirtle-adversario-removebg-preview.png"
    imgJogador.style.width = "200px"
    imgJogador.style.height = "200px"
}
else{
     pokemon.innerText = "Bulbassauro"
    imgJogador.src = "img/bulba.png"
    imgJogador.style.width = "200px"
    imgJogador.style.height = "200px"
}

atacar.addEventListener("click", ()=> {

})