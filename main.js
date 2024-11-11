 function myFunction() {

    value = document.querySelector('#input').value
    if (value == 'xapalapaxala') {
        parrafo = document.querySelector('#mensaje')
        parrafo.innerHTML = 'Wena, el password es correcto'
    }

    else {
        parrafo = document.querySelector('#mensaje')
        parrafo.innerHTML = 'Fail, password incorrecto'
    }

 }