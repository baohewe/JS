//TIPO DE DATOS Y LA FUNCION Typeof

/* let texto='hola mundo'
let int=34
let float=23.3
let bool= true
let bool2=false

console.log(typeof texto)
console.log(typeof int)
console.log(typeof float)
console.log(typeof bool)
console.log(typeof bool2) */


//objetos (personajes de television)

/* let nombre='ranma'
let serie='ranma1/2'
let edad=16

let personaje={
    nombre:'Ranma',
    serie:'Ranma1/2',
    edad:16  
}
console.log(personaje)
console.log(personaje.nombre)
console.log(personaje['serie'])

personaje.edad= 23

console.log(personaje.edad)

//borra un elemento del objeto 
delete personaje.serie

console.log(personaje) */

//ARREGLOS

/* let animales=['leon','buho']
console.log(animales)
console.log(animales[1])

//forma de agregar un elemento a un arreglo
animales[2]='Dragon'
console.log(typeof animales)

//length => indica la cantidad de elementos del arreglo
console.log(animales.length)
 */

//Funtion 
/* function saludar(){
    console.log('Hola mundo')
}

saludar();

function sumar (){
    return 2 + 2
}

let resultado= sumar()
console.log(resultado)

console.log(sumar()) */


//argumentos y parametros
/* function sumar (a, b){
    console.log(arguments)
    return a + b
}

let resultado = sumar(5,6,2,3,9)

console.log(resultado)
console.log(typeof resultado) */

//operadores aritmeticos 
/* let a = 2
let b = 3 */

/* console.log(a+b)
console.log(a-b)
console.log(a/b)
console.log(a*b)
console.log(a%b)
console.log(a**b)
 */

/* //incrementar 
console.log(a)
console.log(++a)
console.log(a++)

//decrementar 
console.log(b)
console.log(++b)
console.log(b++) */

//asignacion 
/* let a = 5
a+=5
a-=5
a*=5
a/=5
a%=5
console.log(a) */

//comparacion 
/* let a = 5
console.log(a>5)
console.log(a<5)
console.log(a>=5)
console.log(a<=5) */

/* let b = 10

console.log(b==10)
console.log(b!=10)

let c = '10'
console.log(c===10)
console.log(c!==10) */

//operadores logicos 

/* //AND &&   si uno es falso => falso
console.log(true && true) 
console.log(true && false)

// OR || por lo unos uno tiene que ser verdadero => verdader
console.log(true || false)
console.log(true || true)
console.log(false || false)

//NOT ! invierte el valor true => false
let a=true
console.log(!a)  */

//operador ternario 
/* let edad = 25
let acceso = edad > 17 ? 'permitir ingreso' : 'no permitir acceso'
console.log(acceso) */


//IF-ELSE

/* let edad = 15
if(edad >17){
    console.log(`el usuario es mayor de edad`)
}
else if(edad>13){
    console.log(`el usuario es un nino`)

}
else{
    console.log(`el usuario es menor de edad `)
} */

/* //while

let i = 0
while(i<10){
    if(i%2==0){
    console.log(`par ${i}`)}
    i++
}
console.log(`fuera del while`) */

//DO-WHILE
/* let i=0
do{
    if(i%2==0){
        console.log(`es par ${i}`)
    }
    else{
        console.log(`es impar ${i}`)
    }

    i++
}while(i<10) */

//FOR
/* for(let i=0; i<=10; i++){
    if(i%2==0){
        console.log(`es par ${i}`)
    }
}
 */

//for-of

/* let animales =['perro','gato','leon']

for(let animal of animales){
    console.log(animal)
} */

/* let user= {
    id:1,
    name:'woooh',
    age:25,
}
for(let prop in user){
    console.log(prop, user['prop'])
} */

//break - continue
/* 
let i=0
while(i<6){
    i++
    if(i===2){
        continue
    }
    if(i===4){
        break
    }
    console.log(i)
}

let accion ='listar'
 */

//switch
/* switch(accion){
    case'Listar':
    console.log('accion de listar')
    break

    case 'guardar':
    console.log('accion de guardar')
    break

    default:
    console.log('accion no reconocida')
}

 */
