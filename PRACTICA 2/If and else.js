/* Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en una alerta. */

/* let a 
 
a=prompt('ingrese un numero','')

if (a%2==0){
    console.log(`El numero ${a} es par`)
}
else{
    console.log(`El numero ${a} es impar`)
}
 */


/* Crear un programa que determine si un número introducido en un Prompt es divisible por 5 o no, mostrar el resultado con console.log
 */

/* let num 
 
num = prompt('Ingrese un numero','')

if(num % 5 == 0){
    console.log(`El numero ${num} es divisible entre 5`)
}
else{
    console.log(`El numero ${num} no es divisible entre 5`)
} */







/* Crear un programa que determine si un número introducido en un popup es divisible por 11 y 5 o no, mostrar el resultado con console.log
 */






/* Crear un programa que le pida al usuario dos números en un Prompt y luego muestre en un alerta el número mayor.
 */

/* let num1 = prompt('1-INGRESE UN VALOR', '')
let num2 = prompt('2-INGRESE UN VALOR' , '')

if(num1==num2){
    alert(`Los numeros ${num1} - ${num2} son iguales`)
}
else if(num1>num2){
    alert(`El numero ${num1} es mayor que ${num2}`)
}
else if(num2>num1){
    alert(`El numero ${num2} es mayor que ${num1}`)
}
else{
    alert(`los valores presentan un error ${num1} - ${num2}`)
}
 */

/* Crear un programa que le pida al usuario primero un números al usuario a través de un prompt y luego un segundo número para luego mostrar en un alerta el número mayor, esta vez realizar el ejercicio ocupando un if ternario. */

//El siguiente código tiene un error que se produce en algunos casos especiales, descubrirlo y arreglarlo:

/* 
let edad = prompt('1-INGRESE SU EDAD ', '')

if(edad <= 12) {
    console.log("Es niño");
}
else if(edad >= 18 ){
     console.log("Es mayor de edad");
} 
else{
     console.log("Es adolecente");
} */

/* Crear un programa que determine si un número introducido en un popup es divisible por 11 y 5 o no, mostrar el resultado con console.log
 */

/* let num = prompt('Ingrese un numero', '')

if(num % 11== 0 && num % 5 == 0){
    console.log(`el numero ${num} es divisible entre 11 y 5`)
}
else{
    console.log(`el numero ${num} no es divisible entre 11 y 5`)
} */

/* Crear un programa que le pida al usuario primero un números al usuario a través de un prompt y luego un segundo número para luego mostrar en un alerta el número mayor, esta vez realizar el ejercicio ocupando un if ternario.
 */

/* let a = prompt('1-ingrese un numero','')
let b = prompt('2-ingrese un numero','')

a > b ? console.log(`a:${a} es mayor que b:${b}`) : console.log(`b:${b} es mayor que a:${a}`) */

/* Crear un programa que determine si un string introducido por un usuario empieza con un número o con una letra.*/

/* let inf = prompt('Ingrese una algun dato','')
let esUnNumero = inf.charAt(0)

if(esUnNumero>0 || esUnNumero < 0){
    console.log(`el primer caracter de ${inf} es ${esUnNumero} un numero`)
}
else{
    console.log(`el primer caracter de ${inf} es ${esUnNumero} una letra`)
}
 */

/* Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se determine si el triángulo es válido o no.*/

/* let angulo1 = parseFloat( prompt('Ingrese el angulo 1',''))
let angulo2 = parseFloat( prompt('Ingrese el angulo 2',''))
let angulo3 = parseFloat( prompt('Ingrese el angulo 3',''))

let total=angulo1+angulo2+angulo3

if (total==180){
    document.write(`El angulo es valido ya que la suma de los angulos es de ${total}`)
}
else{
    document.write(`El angulo NO es valido ya que la suma de los angulos es de ${total}`)

} */

/* Determinar si una palabra empieza con mayúscula o no.*/

/* let inf = prompt('Ingrese una palabra','')
let primeraLetra= inf.charAt(0)
let esMayuscula = primeraLetra.toUpperCase()

if(primeraLetra==esMayuscula){
    console.log(`${inf} inicia con mayuscuala ${primeraLetra}`)
}
else{
    console.log(`${inf} NO inicia con mayuscuala ${primeraLetra}`)
}

/* Determinar si un año dado es bisiesto.*/

/*let ano = prompt('Ingrese un ano','')
if(ano%4==0 && ano%100 !=0 ){
    console.log(`El ano ${ano} es bisiesto`)
}
else if (ano%100==0 && ano%400 !=0){
    console.log(`El ano ${ano} es bisiesto`)
}

else{
    console.log(`El ano ${ano} NO es bisiesto`)
} */