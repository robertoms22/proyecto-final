const maindiva     = document.querySelector('.Main-divA')
const mainli     = document.querySelectorAll('.Main-li')

// Cuando CLICK en mainli
    // Saber la posición de ese mainli
    // Aplicar un transform translateX al maindiva
    // QUITAR la clase activo de TODOS mainli
    // AÑADIR la clase activo al mainli que hemos hecho CLICK

// Recorrer TODOS los mainli
mainli.forEach( ( cadamainli , i )=> {
    // Asignamos un CLICK a cadamainli
    mainli[i].addEventListener('click',()=>{

        // Guardar la posición de ese mainli
        let posicion  = i
        // Calculando el espacio que debe DESPLAZARSE el maindiva
        let operacion = posicion * -50

        // MOVEMOS el grand
        maindiva.style.transform = `translateX(${ operacion }%)`

        // Recorremos TODOS los mainli
        mainli.forEach( ( cadamainli , i )=>{
            // Quitamos la clase ACTIVO a TODOS los mainli
            mainli[i].classList.remove('active')
        })
        // Añadir la clase activo en el mainli que hemos hecho CLICK
        mainli[i].classList.add('active')

    })
}) 
