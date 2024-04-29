// INTENTO DE HACER UN PIEDRA PAPEL O TIJERA

//version html

/* PIEDRA = 1 - PAPEL = 2 - TIJERA = 3    */




function iniciarJuego(){

    // seleccion de un boton el cual contiene un valor 

    const allButtons = document.querySelectorAll('.btn')
    console.log(allButtons)

    // seleccion del jugador desdeel html

    let seleccionJugador
    allButtons.forEach(bt =>{
    bt.addEventListener('click',(e)=>{
        //selecciona la informacaion que contiene el value
        seleccionJugador = e.target.value
        console.log(seleccionJugador)
    
    let jugador = parseInt(seleccionJugador)
    

    //seleccion del computador con la seleccion de un numero random
    let computadora =Math.floor(Math.random()*(3-1+1)) + 1
    console.log(computadora)

  //Desarrollo logico del juego para la seleccion del ganador del mismo
   
    if(jugador >= 1 && jugador<=3){  
        if(jugador==computadora){
            console.log(`PIEDRA = 1 - PAPEL = 2 - TIJERA = 3`)
            console.log(`El resultado fue un empate `)
            console.log(`Jugador: ${jugador}   Computadora: ${computadora}`)
        }
        else if( (jugador==2 && computadora==1 ) || (jugador==1 && computadora==3) || (jugador==3 && computadora==2) ){
            console.log(`PIEDRA = 1 - PAPEL = 2 - TIJERA = 3`)
            console.log(`Usted a ganado con con la siguiente jugada`)
            console.log(`Jugador => ${jugador}   Computadora => ${computadora}`)
        }
        else{
            console.log(`PIEDRA = 1 - PAPEL = 2 - TIJERA = 3`)
            console.log(`Usted a perdido con con la siguiente jugada`)
            console.log(`Jugador => ${jugador}   Computadora => ${computadora}`)
        }
    }
    else{
        console.log(`El valor ingresado no pertenece a los valores aceptados`)
        console.log(`PIEDRA = 1 - PAPEL = 2 - TIJERA = 3`)
    }   

    
             })
        })


}