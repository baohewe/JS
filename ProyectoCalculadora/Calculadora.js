//STHEFANY SANCHEZ

function Agregar(num){
    let valorActual = document.getElementById('valor-actual');
    let valorIngresado = valorActual.textContent + num;
    valorActual.textContent = valorIngresado;
}

setTimeout(() => {
    document.getElementById('valor-actual').textContent= ''
    document.getElementById('valor-anterior').textContent=0
}, );

//BOTON C
function Limpiar(){
    document.getElementById('valor-actual').textContent= ''
    document.getElementById('valor-anterior').textContent=0
}

//BOTON ←
function Borrar(){
    const obtenerElemento = document.getElementById('valor-actual').textContent
    document.getElementById('valor-actual').textContent= obtenerElemento.slice(0, -1)
}

function Calcular(){
    try{
        const procedimiento = document.getElementById('valor-actual').textContent
        document.getElementById('valor-anterior').textContent = procedimiento
        console.log(procedimiento)

        const restul = eval(document.getElementById('valor-actual').textContent)
        document.getElementById('valor-actual').textContent= restul
        console.log(restul)

    }catch(error){
        document.getElementById('valor-actual').textContent='Error'
        
        //Ejecuta la funcion "limpiar" luego de 3000 milisegundos = 3seg
        setTimeout(Limpiar, 3000)
    }
    
}



