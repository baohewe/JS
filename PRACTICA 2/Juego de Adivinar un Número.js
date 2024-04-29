/* - Crea un juego donde la computadora genera un número aleatorio y el jugador debe adivinarlo.
- El juego debe dar pistas al jugador si el número es mayor o menor al que ha ingresado.
 */





//Numero aleatorio a adivinar 
let numeroAleatorio = Math.floor(Math.random()*10-1+1)+1
    console.log(numeroAleatorio) 
    
let numeroJugador

do{
   
    numeroJugador= prompt('Escribe un numero', '')

    if(numeroJugador>numeroAleatorio){
        console.log(` ${numeroJugador} es superior al numero`)
        document.write(` ${numeroJugador} es superior al numero `)
    }
    else if(numeroJugador<numeroAleatorio){
        console.log(` ${numeroJugador} es inferior al numero `)
        document.write(` ${numeroJugador} es inferior al numero `)
    }
 
}while(numeroAleatorio!=numeroJugador)

console.log(`haz adivinado (${numeroJugador})el numero correcto es ${numeroAleatorio}`)
console.log(`fin del programa`)

//funcion generadora de numeros aleatorios 

