// seleccion de un boton el cual contiene un valor 

const allButtons = document.querySelectorAll('.btn')
console.log(allButtons)

//registro click event 
let seleccionNumeroValue
allButtons.forEach(bt =>{
    bt.addEventListener('click',(e)=>{
        //selecciona la informacaion que contiene el value
        seleccionNumeroValue = e.target.value
        console.log(seleccionNumero)
    })
})

let seleccionNumeroInner
allButtons.forEach(bt =>{
    bt.addEventListener('click',(e)=>{
         //selecciona la informacaion que contiene el texto de la etiqueta
        seleccionNumeroInner = e.target.innerHTML
        console.log(seleccionNumero)
    })
})
