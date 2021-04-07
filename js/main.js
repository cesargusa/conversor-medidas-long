document.getElementById('borrar').onclick = borr;
let centimetros = document.getElementById('centimetros')
let milimetros = document.getElementById('milimetros')
let decimetros = document.getElementById('decimetros')
let metros = document.getElementById('metros')
let kilometros = document.getElementById('kilometros')
let c = document.getElementById('centimetros').value


/* let cam = document.getElementById('centimetros').value;
centimetros.value.change(function() {
    if (centimetros.value != cam) {
        console.log("wehhefw")
    }
}) */

function cambiar() {
    milimetros.value = 12
    console.log("f")
}

function borr() {
    console.log("Valores Borrados")
    centimetros.value = ""
    milimetros.value = ""
    decimetros.value = ""
    kilometros.value = ""
    metros.value = ""
}