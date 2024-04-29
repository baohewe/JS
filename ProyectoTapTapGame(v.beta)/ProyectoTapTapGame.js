let numRandom  
let conf = 0
let contador = 0
let secuencia=0
function generarNum(){
    
    //generar numRandom
    numRandom= Math.floor(Math.random()*(3+1-1))+1 

    console.log(`conf=> ${conf}`)
    secuencia = secuencia+1
  
        if(conf==2 && numRandom== 3){
            console.log('tijerasa')
            console.log('fin del juego')
            document.getElementById('imagen3').textContent = 'tijeras'


            setTimeout(borrar,3000)
        }
    

        else if(conf==1 && numRandom== 2){
            console.log('papel')
            conf=conf+1
            document.getElementById('imagen2').textContent = 'papel'
        }
    


        else if( numRandom==1 && secuencia == 1 ){
            console.log('piedra')
            conf=conf+1
            document.getElementById('imagen1').textContent = 'piedra'

            
        }

        else{
            conf=0
            secuencia=0
            borrar()
        }

    
    

    contador = contador+1
    document.getElementById('contador-de-intento').textContent= contador
    mostrarElementoGenerado(numRandom)
}


function borrar(){
    document.getElementById('imagen1').textContent ="?"
    document.getElementById('imagen2').textContent ="?"
    document.getElementById('imagen3').textContent ="?"    
}

function mostrarElementoGenerado(numRandom){
    if(numRandom==1){
        document.getElementById('imagen-generada').textContent = 'piedra'
    }
    else if(numRandom == 2){
        document.getElementById('imagen-generada').textContent = 'papel'
    }
   else{
        document.getElementById('imagen-generada').textContent = 'tijeras'
    }
}





