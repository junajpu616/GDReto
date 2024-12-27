document.addEventListener('DOMContentLoaded', function(){
    inputFuncion();
})

function inputFuncion() {
    const checkInput = document.querySelector('#checkUno');
    const textInput = document.querySelector('#inputUno');
    checkInput.addEventListener('change', ()=>{
        textInput.focus()
    })
    
}