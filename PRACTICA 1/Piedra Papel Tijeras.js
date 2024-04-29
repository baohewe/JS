// INTENTO DE HACER UN PIEDRA PAPEL O TIJERA

//version de consola 

/* PIEDRA = 1 - PAPEL = 2 - TIJERA = 3    */
let jugador=  1           
let computadora= 1
x
if(jugador >= 0 && jugador<=3){  
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

