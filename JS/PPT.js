let eleccionUsuarioMostrar = document.getElementById("eleccion-usuario");
let eleccionCompuMostrar = document.getElementById("eleccion-compu");
let mostrarResultado = document.getElementById("resultado");
let mostrarScore1 = document.getElementById("score1");
let mostrarScore2 = document.getElementById("score2");
let posiblesResultados = document.querySelectorAll('button');
const caraMochis = document.querySelector(".carita")

const scoreUsuario = [];
const scoreCompu = [];

let eleccionUsuario
let eleccionCompu
let result
let score1
let score2

posiblesResultados.forEach(posiblesResultado => posiblesResultado.addEventListener ("click", (e) => {
    eleccionUsuario = e.target.id
    eleccionCompuMostrar.innerHTML = eleccionUsuario
    generarEleccionCompu ()
    crearResultado ()
}
))

function generarEleccionCompu () {
    const numRandom = Math.floor(Math.random() * 3) + 1 // esto lo aprendi primero en una leccion en code academy xD

    if (numRandom === 1) {
        eleccionCompu = "piedra"
    }

    if (numRandom === 2) {
        eleccionCompu = "papel"
    }

    if (numRandom === 3) {
        eleccionCompu = "tijeras"
    }
    
    eleccionCompuMostrar.innerHTML = eleccionCompu
    eleccionUsuarioMostrar.innerHTML = eleccionUsuario
}

function crearResultado() {
    if (eleccionCompu === eleccionUsuario) {
        result = ("Empatamos!")
        caraMochis.textContent = "º □ º l|l"
    }
    

    if (eleccionCompu === "piedra" && eleccionUsuario === "papel") {
        result = ("Ganaste!! Escogí Piedra ")
        scoreUsuario.push(1)
        caraMochis.textContent = "☆▽☆"
    }

    if (eleccionCompu === "piedra" && eleccionUsuario === "tijeras"){
        result = ("Perdiste... Yo elegí Piedra... ")
        scoreCompu.push(1)
        caraMochis.textContent = "╥ω╥"
    }

    if (eleccionCompu === "papel" && eleccionUsuario === "tijeras"){
        result = ("Me has ganado!! Había escogido papel")
        scoreUsuario.push(1)
        caraMochis.textContent = "ᓀ ᓀ"
    }

    if (eleccionCompu === "papel" && eleccionUsuario === "piedra"){
        result = ("No puedes derrotarme!! Elegí papel")
        scoreCompu.push(1)
        caraMochis.textContent = "✧ω✧"
    }

    if (eleccionCompu === "tijeras" && eleccionUsuario === "piedra"){
        scoreUsuario.push(1)
        caraMochis.textContent = "◣_◢"
        result = ("Cómo es esto posible! Perdí, elegí tijeras")
    }

    if (eleccionCompu === "tijeras" && eleccionUsuario === "papel"){
        caraMochis.textContent = "„• ᴗ •„"
        scoreCompu.push(1)
        result = ("Gané!! Elegí tijeras")
    }

    mostrarResultado.innerHTML = result

    console.log(scoreUsuario.length) // corroborando que los arrays tengan el valor correcto
    console.log(scoreCompu.length)

    score1 = scoreCompu.length
    score2 = scoreUsuario.length

    mostrarScore1.innerHTML = score1
    mostrarScore2.innerHTML = score2
}

fetch ('/JS/intento.json')
 .then(Response => Response.json())
 .then(expresiones => {
    console.log(expresiones.cara1);
    console.log(expresiones.cara2);
    console.log(expresiones.cara);
 })
