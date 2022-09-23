let eleccionUsuarioMostrar = document.getElementById("eleccion-usuario");
let eleccionCompuMostrar = document.getElementById("eleccion-compu");
let mostrarResultado = document.getElementById("resultado");
let posiblesResultados = document.querySelectorAll('button');

let eleccionUsuario
let eleccionCompu
let result

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

const scoreUsuario = [];
const scoreCompu = [];

function crearResultado() {
    if (eleccionCompu === eleccionUsuario) {
        result = ("Empatamos! (°ロ°) !")
    }
    

    if (eleccionCompu === "piedra" && eleccionUsuario === "papel") {
        result = ("Ganaste!! 	ヽ(*⌒▽⌒*)ﾉ escogí Piedra ")
        scoreUsuario.push(1)
    }

    if (eleccionCompu === "piedra" && eleccionUsuario === "tijeras"){
        result = ("Perdiste... (っ˘̩╭╮˘̩)っ yo elegí Piedra... ")
        scoreCompu.push(1)
    }

    if (eleccionCompu === "papel" && eleccionUsuario === "tijeras"){
        result = ("Me has ganado!! Había escogido papel (｡T ω T｡)")
        scoreUsuario.push(1)
    }

    if (eleccionCompu === "papel" && eleccionUsuario === "piedra"){
        result = ("No puedes derrotarme!! Elegí papel ᕙ(  •̀ ᗜ •́  )ᕗ ")
        scoreCompu.push(1)
    }

    if (eleccionCompu === "tijeras" && eleccionUsuario === "piedra"){
        result = ("Cómo es esto posible! (╯°益°)╯彡┻━┻ Perdí, elegí tijeras  ")
        scoreUsuario.push(1)
    }

    if (eleccionCompu === "tijeras" && eleccionUsuario === "papel"){
        result = ("Gané!! Elegí tijeras 	(*￣▽￣)b")
        scoreCompu.push(1)
    }

    mostrarResultado.innerHTML = result
}

console.log(scoreUsuario)
console.log(scoreCompu)

console.log(scoreUsuario.length)
console.log(scoreCompu.length)
