let textoCompu = document.getElementById('textoCompu');
let btnReinicio = document.getElementById('btnReinicio');
let boxes = Array.from(document.getElementsByClassName('box'));

console.log(boxes)

const O_TEXTO = "O"
const X_TEXTO = "X"
let jugador1 = X_TEXTO
let espacios = Array(9).fill(null)

console.log(espacios);

const juguemos = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

function boxClicked(e) {
    const id = e.target.id
    if(!espacios[id]) {
        espacios[id] = jugador1
        e.target.innerText = jugador1

        jugador1 = jugador1 == X_TEXTO ? O_TEXTO : X_TEXTO
    }
}

btnReinicio.addEventListener('click', reiniciar)
function reiniciar () {
    espacios.fill(null)

    boxes.forEach( box =>{
        box.innerText = ''
    })
}

juguemos ()