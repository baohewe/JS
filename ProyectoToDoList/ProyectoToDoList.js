// Tomar la fecha completa actual del computador
let fechaActual = new Date();

// Crear un elemento <div> para su uso posterior
let div = document.createElement('div');

// Obtener todos los elementos con la clase "task" y asignarlos a la constante "terminarTarea"
const terminarTarea = document.getElementsByClassName('task');

// Definir los nombres de los días de la semana en un array
let diaSemana = ['domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];

// Definir los nombres de los meses en un array
let mes = ['Ene','Feb','Marz','Abr','May','Jun','Jul','Agost','Sept','Oct','Nov','Dic'];

// Mostrar el mes actual en un elemento HTML con el id "dateMonth"
document.getElementById('dateMonth').textContent = mes[fechaActual.getMonth()];

// Mostrar el día actual en un elemento HTML con el id "dateNumber"
document.getElementById('dateNumber').textContent = fechaActual.getDate();

// Mostrar el día de la semana actual en un elemento HTML con el id "dateText"
document.getElementById('dateText').textContent = diaSemana[fechaActual.getDay()];

// Mostrar el año actual en un elemento HTML con el id "dateYear"
document.getElementById('dateYear').textContent = fechaActual.getFullYear();

// Función para agregar una nueva tarea
function addNewTask(e) {
    e.preventDefault();

    // Obtener el valor del input de tarea
    const tareaInput = document.getElementById('inputTaskText').value;

    // Verificar si se ingresó una tarea o no
    if (tareaInput == "") {
        alert('Debe ingresar una tarea');
    } else {
        // Obtener el contenedor de tareas
        const listaDeTareas = document.getElementById('tasksContainer');

        // Crear un nuevo div para la tarea
        div = document.createElement('div');
        div.className = 'task'; // Establecer la clase del div como "task"
        div.id = 'divID'; // Asignar un ID al div

        // Insertar el texto de la tarea dentro del div
        div.innerText = tareaInput;

        // Agregar el nuevo div al contenedor de tareas
        listaDeTareas.appendChild(div);

        // Limpiar el valor del input
        document.getElementById('inputTaskText').value = '';

        // Agregar el evento de click a la nueva tarea
        div.addEventListener('click', marcarTarea);
    }
}

// Función para marcar una tarea como completada o pendiente al hacer clic en ella
function marcarTarea(i) {
    i.preventDefault();
    const div = i.target; // Obtener el div que disparó el evento
    let tipoDeClase = div.className;

    // Cambiar la clase del div dependiendo de su estado actual
    if (tipoDeClase == 'task') {
        div.className = 'done'; // Marcar como completada
    } else if (tipoDeClase == 'done') {
        div.className = 'task'; // Marcar como pendiente
    } else {
        alert('Existe un error');
    }
}

// Función para reordenar las tareas pendientes al principio de la lista
function renderOrderedTasks() {
    let cantidadDiv = document.getElementById('tasksContainer').children;

    for (i = 0; i <= cantidadDiv.length; i++) {
        if (cantidadDiv[i].className == 'task') {

            document.getElementById('tasksContainer').insertBefore(cantidadDiv[i], cantidadDiv[0]);
 
        } else {
            console.log('Error');
        }
    }
}