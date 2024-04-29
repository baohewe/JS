const contenedorCelulas = document.getElementById('contenedor-celulas')



for (let i=0; i<50*50; i++){
    const celula = document.createElement('div') 
    celula.classList.add('celula')

    celula.setAttribute('id',`${i}`)
    celula.setAttribute('value','0')
    celula.setAttribute('name','celula')
    
    celula.addEventListener('click', ()=>{
        celula.classList.toggle('active')
        //cambia el value al precionar la celula
        if(celula.classList.contains('active')){
            celula.setAttribute('value','1') 
        }
        else{
            celula.setAttribute('value', '0')
        }
        
    })  

    contenedorCelulas.appendChild(celula)
}



function empezarJuego(){
    //cB => celula base
    let cB= document.getElementsByName('celula')
    
    /*  a1 = cB[i-51]
        a2 = cB[i-50]
        a3 = cB[i-49]
    
        b1= cB[i-1]
        b3= cB[i+1]
    
        c1 = cB[i+49]
        c2 = cB[i+50]
        c3 = cB[i+51] */


    for(let i=0; i<50*50;i++){

        //esquina 0
        if (cB[i].getAttribute('id') === '0') {
            let estadoCelula = 0;
            let b2 = parseInt(cB[i].getAttribute('value'));

            let b3 = parseInt(cB[i + 1].getAttribute('value'));
            let c2 = parseInt(cB[i + 50].getAttribute('value'));
            let c3 = parseInt(cB[i + 51].getAttribute('value'));
          
            estadoCelula =  b3 + c2 + c3;
            // si la celula esta viva
            if (b2 == 1) {
              if (estadoCelula > 3 || estadoCelula < 2) {
                cB[i].setAttribute('value', '0');
                cB[i].classList.remove('active') 

              } else if (estadoCelula == 2 || estadoCelula == 3) {
                cB[i].setAttribute('value', '1');
              }
      
            } 
            else if (b2 == 0){

                if ( estadoCelula == 3) {
                    cB[i].setAttribute('value', '1');
                    cB[i].classList.toggle('active')
                }
                else if(estadoCelula < 3 || estadoCelula > 3){
                    cB[i].setAttribute('value', '0');
                }
            }
            
            
            
        }



        //esquina 49
        if (cB[i].getAttribute('id') === '49') {
            let estadoCelula = 0;
            let b2 = parseInt(cB[i].getAttribute('value'));

            let b1 = parseInt(cB[i - 1].getAttribute('value'));
            let c1 = parseInt(cB[i + 49].getAttribute('value'));
            let c2 = parseInt(cB[i + 50].getAttribute('value'));
          
            estadoCelula =   b1 + c1 + c2;
            // si la celula esta viva
            if (b2 == 1) {
                if (estadoCelula > 3 || estadoCelula < 2) {
                  cB[i].setAttribute('value', '0');
                  cB[i].classList.remove('active') 
  
                } else if (estadoCelula == 2 || estadoCelula == 3) {
                  cB[i].setAttribute('value', '1');
                }
        
            } 
              else if (b2 == 0){
                if ( estadoCelula == 3) {
                    cB[i].setAttribute('value', '1');
                    cB[i].classList.toggle('active')
                }
                else if(estadoCelula < 3 || estadoCelula > 3){
                    cB[i].setAttribute('value', '0');
                }
            }
        }

        //esquina 2450
        if (cB[i].getAttribute('id') === '2450') {
            let estadoCelula = 0;
            let b2 = parseInt(cB[i].getAttribute('value'));

            let a2 = parseInt(cB[i - 50].getAttribute('value'));
            let a3 = parseInt(cB[i - 49].getAttribute('value'));
            let b3 = parseInt(cB[i + 1].getAttribute('value'));
          
            estadoCelula =  a2 + a3 + b3;
            // si la celula esta viva
            if (b2 == 1) {
                if (estadoCelula > 3 || estadoCelula < 2) {
                  cB[i].setAttribute('value', '0');
                  cB[i].classList.remove('active') 
  
                } else if (estadoCelula == 2 || estadoCelula == 3) {
                  cB[i].setAttribute('value', '1');
                }
        
              } 
            else if (b2 == 0){
                if ( estadoCelula == 3) {
                    cB[i].setAttribute('value', '1');
                    cB[i].classList.toggle('active')
                }
                else if(estadoCelula < 3 || estadoCelula > 3){
                    cB[i].setAttribute('value', '0');
                }
            }
        }

        //esquina 2499
        if (cB[i].getAttribute('id') === '2499') {
            let estadoCelula = 0;
            let b2 = parseInt(cB[i].getAttribute('value'));

            let a1 = parseInt(cB[i - 51].getAttribute('value'));
            let a2 = parseInt(cB[i - 50].getAttribute('value'));
            let b1 = parseInt(cB[i - 1].getAttribute('value'));
          
            estadoCelula =  a1 + a2 + b1;
            // si la celula esta viva
            if (b2 == 1) {
                if (estadoCelula > 3 || estadoCelula < 2) {
                  cB[i].setAttribute('value', '0');
                  cB[i].classList.remove('active') 
                } 
                else if (estadoCelula == 2 || estadoCelula == 3) {
                  cB[i].setAttribute('value', '1');
                }
            } 
            else if (b2 == 0){
                if ( estadoCelula == 3) {
                    cB[i].setAttribute('value', '1');
                    cB[i].classList.toggle('active')
                }
                else if(estadoCelula < 3 || estadoCelula > 3){
                    cB[i].setAttribute('value', '0');
                }
            }
        }








        //vertical izquierdo
        if (parseInt(cB[i].getAttribute('id')) % 50 == 0 && parseInt(cB[i].getAttribute('id'))!=0 && parseInt(cB[i].getAttribute('id'))!=2450) {
            let estadoCelula = 0;
            let b2 = parseInt(cB[i].getAttribute('value'));
           

            let a2 = parseInt(cB[i - 50].getAttribute('value'));
            let a3 = parseInt(cB[i - 49].getAttribute('value'));
            let b3 = parseInt(cB[i + 1].getAttribute('value'));
            let c2 = parseInt(cB[i + 50].getAttribute('value'));
            let c3 = parseInt(cB[i + 51].getAttribute('value')); 
         
            estadoCelula = a2 + a3 + b3 + c2 + c3;
            // si la celula esta viva
            if (b2 == 1) {
                if (estadoCelula > 3 || estadoCelula < 2) {
                  cB[i].setAttribute('value', '0');
                  cB[i].classList.remove('active') 
                } 
                else if (estadoCelula == 2 || estadoCelula == 3) {
                  cB[i].setAttribute('value', '1');
                }
            } 
            else if (b2 == 0){
                if ( estadoCelula == 3) {
                    cB[i].setAttribute('value', '1');
                    cB[i].classList.toggle('active')
                }
                else if(estadoCelula < 3 || estadoCelula > 3){
                    cB[i].setAttribute('value', '0');
                }
            }
        }

        //vertical derecho


        if ((parseInt(cB[i].getAttribute('id')) + 1) % 50 == 0 && parseInt(cB[i].getAttribute('id'))!=49 && parseInt(cB[i].getAttribute('id'))!=2499 ) {
            let estadoCelula = 0;
            let b2 = parseInt(cB[i].getAttribute('value'));

            let a1 = parseInt(cB[i - 51].getAttribute('value'));
            let a2 = parseInt(cB[i - 50].getAttribute('value'));
            let b1 = parseInt(cB[i - 1].getAttribute('value'));
            let c1 = parseInt(cB[i + 49].getAttribute('value'));
            let c2 = parseInt(cB[i + 50].getAttribute('value')); 
            
            estadoCelula =  a1 + a2 + b1 + c1 + c2;
            // si la celula esta viva
            if (b2 == 1) {
                if (estadoCelula > 3 || estadoCelula < 2) {
                  cB[i].setAttribute('value', '0');
                  cB[i].classList.remove('active') 
                } 
                else if (estadoCelula == 2 || estadoCelula == 3) {
                  cB[i].setAttribute('value', '1');
                }
            } 
            else if (b2 == 0){
                if ( estadoCelula == 3) {
                    cB[i].setAttribute('value', '1');
                    cB[i].classList.toggle('active')
                }
                else if(estadoCelula < 3 || estadoCelula > 3){
                    cB[i].setAttribute('value', '0');
                }
            }
        }

        //Horizontal arriba

        if (parseInt(cB[i].getAttribute('id')) >= 1 && parseInt(cB[i].getAttribute('id')) <= 48) {
            let estadoCelula = 0;
            let b2 = parseInt(cB[i].getAttribute('value'));

            let b1 = parseInt(cB[i - 1].getAttribute('value'));
            let b3 = parseInt(cB[i + 1].getAttribute('value'));
            let c1 = parseInt(cB[i + 49].getAttribute('value'));
            let c2 = parseInt(cB[i + 50].getAttribute('value'));
            let c3 = parseInt(cB[i + 51].getAttribute('value')); 
            
            estadoCelula =  b1 + b3 + c1 + c2 + c3;
            // si la celula esta viva
            if (b2 == 1) {
                if (estadoCelula > 3 || estadoCelula < 2) {
                  cB[i].setAttribute('value', '0');
                  cB[i].classList.remove('active') 
                } 
                else if (estadoCelula == 2 || estadoCelula == 3) {
                  cB[i].setAttribute('value', '1');
                }
            } 
            else if (b2 == 0){
                if ( estadoCelula == 3) {
                    cB[i].setAttribute('value', '1');
                    cB[i].classList.toggle('active')
                }
                else if(estadoCelula < 3 || estadoCelula > 3){
                    cB[i].setAttribute('value', '0');
                }
            }
        }

            //Horizontal abajo

            if (parseInt(cB[i].getAttribute('id')) >= 2451 && parseInt(cB[i].getAttribute('id')) <= 2498) {
            let estadoCelula = 0;
            let b2 = parseInt(cB[i].getAttribute('value'));

            let a1 = parseInt(cB[i - 51].getAttribute('value'));
            let a2 = parseInt(cB[i - 50].getAttribute('value'));
            let a3 = parseInt(cB[i - 49].getAttribute('value'));
            let b1 = parseInt(cB[i - 1].getAttribute('value'));
            let b3 = parseInt(cB[i + 1].getAttribute('value'));

            estadoCelula = a1 + a2 + a3 + b1 + b3;
            // si la celula esta viva
            if (b2 == 1) {
                if (estadoCelula > 3 || estadoCelula < 2) {
                  cB[i].setAttribute('value', '0');
                  cB[i].classList.remove('active') 
                } 
                else if (estadoCelula == 2 || estadoCelula == 3) {
                  cB[i].setAttribute('value', '1');
                }
            } 
            else if (b2 == 0){
                if ( estadoCelula == 3) {
                    cB[i].setAttribute('value', '1');
                    cB[i].classList.toggle('active')
                }
                else if(estadoCelula < 3 || estadoCelula > 3){
                    cB[i].setAttribute('value', '0');
                }
            }
        }

        // el resto de celulas cuyas celulas vecinas son 8
        if(parseInt(cB[i].getAttribute('id')) > 49 && parseInt(cB[i].getAttribute('id')) < 2450 && (parseInt(cB[i].getAttribute('id')) + 1) % 50 != 0 && parseInt(cB[i].getAttribute('id')) % 50 != 0){

        

            let estadoCelula = 0;
            let b2 = parseInt(cB[i].getAttribute('value'));

            let a1 = parseInt(cB[i - 51].getAttribute('value'));
            let a2 = parseInt(cB[i - 50].getAttribute('value'));
            let a3 = parseInt(cB[i - 49].getAttribute('value'));
            let b1 = parseInt(cB[i - 1].getAttribute('value'));
            let b3 = parseInt(cB[i + 1].getAttribute('value'));
            let c1 = parseInt(cB[i + 49].getAttribute('value'));
            let c2 = parseInt(cB[i + 50].getAttribute('value'));
            let c3 = parseInt(cB[i + 51].getAttribute('value'));

            estadoCelula =  a1 + a2 + a3 + b1 + b3 + c1 + c2 + c3;
            // si la celula esta viva
            if (b2 == 1) {
               if (estadoCelula === 2 || estadoCelula === 3) {
                  cB[i].setAttribute('value', '1');
                }
                else{
                    cB[i].setAttribute('value', '0');
                    cB[i].classList.remove('active') 
                }
            } 
            else if (b2 == 0){
                console.log(estadoCelula)
                if ( estadoCelula === 3) {
                    cB[i].setAttribute('value', '1');
                    cB[i].classList.toggle('active')
                }
               
            }
        }


    }

    
    

} 




















































/////////////////////////////////////////////////////////////



