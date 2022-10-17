const squares = document.querySelectorAll('.cuadro')
const tiempoRest = document.querySelector('#tiempoRestante')
const score = document.querySelector ('#score')
const caraMochis = document.querySelector(".carita")
const textoMochis = document.querySelector(".textos")

let result = 0
let tiempo = 30
let temporizador = null
let posicion

function cuadrosRandom () {
    squares.forEach(square => {
        square.classList.remove("puerco")
    });

    let cuadroRandom = squares[Math.floor(Math.random() * 9) +1]
    cuadroRandom.classList.add('puerco')
    posicion = cuadroRandom.id;
}

squares.forEach((square) => {
    square.addEventListener("mousedown", () => {
        if (square.id == posicion) {
            result++;
            score.textContent = result;
            posicion = null;
        }
    });
});

function moverEmoji () {
    temporizador = setInterval(cuadrosRandom, 500);
}

moverEmoji()

function cuentaRegresiva () {
    tiempo--;
    tiempoRest.textContent = tiempo

    if (tiempo == 0) {
        clearInterval(cuentaReg)
        clearInterval(temporizador)
        caraMochis.textContent = "￣▽￣"
        textoMochis.textContent = "Tu score final es " + result
    }
}

let cuentaReg = setInterval(cuentaRegresiva, 1000)
