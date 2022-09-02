alert ("Vamos a jugar piedra, papel o tijeras ( ノ-_-)ノﾞ_□ VS □_ヾ(^-^ヽ)");
alert ("Confía en mí, prometo no hacer trampa (￣ω￣)/");

let eleccionUsuario = prompt ("Escribe tu elección, todo en minúsculas!! piedra, papel o tijeras");
let eleccionCompu

if (eleccionUsuario === 'piedra' || 'papel' || 'tijeras') {
    generarEleccionCompu ()
    console.log(eleccionCompu) //agregue esta linea para corroborar que se genere la eleccion de la compu   
    crearResultado ();
} else alert ('No sea tramposo, esa no es una opción válida (ᓀ ᓀ)')

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
    
}

function crearResultado() {
    if (eleccionCompu === eleccionUsuario)
    alert ("Empatamos! (°ロ°) !")

    if (eleccionCompu === "piedra" && eleccionUsuario === "papel")
    alert ("Ganaste!! 	ヽ(*⌒▽⌒*)ﾉ escogí Piedra ")

    if (eleccionCompu === "piedra" && eleccionUsuario === "tijeras")
    alert ("Perdiste... (っ˘̩╭╮˘̩)っ yo elegí Piedra... ")

    if (eleccionCompu === "papel" && eleccionUsuario === "tijeras")
    alert ("Me has ganado!! Había escogido papel (｡T ω T｡)")

    if (eleccionCompu === "papel" && eleccionUsuario === "piedra")
    alert ("No puedes derrotarme!! Elegí papel ᕙ(  •̀ ᗜ •́  )ᕗ ")

    if (eleccionCompu === "tijeras" && eleccionUsuario === "piedra")
    alert ("Cómo es esto posible! (╯°益°)╯彡┻━┻ Perdí, elegí tijeras  ")

    if (eleccionCompu === "tijeras" && eleccionUsuario === "papel")
    alert ("Gané!! Elegí tijeras 	(*￣▽￣)b")
}

alert ("Muchas gracias por jugar conmigo. No importa quien gane o pierda, lo importante es seguir siendo amigos ヽ(≧◡≦)八(o^ ^o)ノ")
