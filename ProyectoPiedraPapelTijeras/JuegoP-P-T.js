//STHEFANY SANCHEZ

//Los id de lo btn se guardan en una variale 
const player1 =document.getElementById('player1')
const player2 =document.getElementById('player2')

//funciones para cambiar imagenes del panel VS
function CambioPiedra(){
    player1.src ='Imagenes/Piedra.PNG'
    opcJugador = document.getElementById('piedra').value
}
function CambioPapel(){
    player1.src ='Imagenes/Papel.PNG'
    opcJugador = document.getElementById('papel').value
}
function CambioTijeras(){
    player1.src ='Imagenes/Tijeras.PNG'
    opcJugador = document.getElementById('tijeras').value
}

//funcion para iniciar el juego
function iniciar(){
    let opcCpu =Math.floor(Math.random()*(3-1+1)) + 1
    //console.log(opcCpu)

    

    switch(opcCpu){
        //cambiar la img player2 a piedra
        case 1:
            player2.src ='Imagenes/Piedra.PNG'
        break

        //cambiar la img player2 a papel
        case 2:
            player2.src='Imagenes/Papel.PNG'
            break

        //cambiar la img player2 a tijeras
        case 3:
            player2.src = 'Imagenes/Tijeras.PNG'
    }

    
    desarrolloDelJuego(opcCpu)
}

function reiniciar(){
    //volver a las imagenes de inicios en el vs
    player1.src = 'Imagenes/persona.svg'
    player2.src = 'Imagenes/cpu.svg'
    
    document.getElementById('puntos-jugador1').textContent=0
    document.getElementById('puntos-jugador2').textContent=0
    document.getElementById('resultado').textContent='VS'
    //color para el texto
    document.getElementById('resultado').style.color = '#0c0910'
}

function desarrolloDelJuego(opcCpu){

    //declaracion de los puntos de la partida, pasan de ser de tipo string a int
    let puntPlayer1 =parseInt (document.getElementById('puntos-jugador1').textContent)
    let puntPlayer2 =parseInt (document.getElementById('puntos-jugador2').textContent)

    
    if(opcJugador >= 1 && opcJugador<=3){  

        if(opcJugador==opcCpu){
            //console.log(`El resultado fue un empate `)
            document.getElementById('resultado').textContent= 'EMPATE'
            document.getElementById('resultado').style.color = '#465362'

       
        }
        else if( (opcJugador==2 && opcCpu==1 ) || (opcJugador==1 && opcCpu==3) || (opcJugador==3 && opcCpu==2) ){
            //console.log(`Usted a ganado con  alguna jugada`)
            
            puntPlayer1+=1

            document.getElementById('puntos-jugador1').textContent = puntPlayer1
            //cambio del texto vs
            document.getElementById('resultado').textContent= 'EL PLAYER 1 HA GANADO'
            //color para el texto
            document.getElementById('resultado').style.color = '#44BBA4'
            
        }
        else{
            //console.log(`Usted a perdido con con la siguiente jugada`)
            
            puntPlayer2+=1

            document.getElementById('puntos-jugador2').textContent = puntPlayer2
            //cambio del texto vs
            document.getElementById('resultado').textContent= 'EL PLAYER 2 HA GANADO'
            //color para el texto
            document.getElementById('resultado').style.color = '#E94F37'

        }
    }
    else{
       alert(`El valor ingresado no pertenece a los valores aceptados`)
    }
}