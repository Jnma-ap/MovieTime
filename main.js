let pagina = 1;
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");
const btnBusqueda = document.querySelector("#btnBusqueda");
const buscador = document.querySelector(".input-search");
const cardContainer = document.getElementById("contenedor");

btnSiguiente.addEventListener('click', () => {
    if(pagina < 1000){
        pagina += 1;
        cargarPeliculas();
    }
});

btnAnterior.addEventListener('click', () => {
    if(pagina > 1){
        pagina -= 1;
        cargarPeliculas();
    }
});

// Recupar valor del input
btnBusqueda.onclick = () => {
    const valorInput = buscador.value;
    // A JSON y guardado en Storage
    const aJSON = JSON.stringify(valorInput);
    sessionStorage.setItem("pelicula", aJSON);
    // Retorna
    let valor = sessionStorage.getItem("pelicula");
    console.log(valor);
};

// Dando forma a las cards


const cargarPeliculas = async() => {
    try {
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${pagina}`);
    
        console.log(respuesta);

        // Si la respuesta es correcta
        if(respuesta.status === 200){
            const datos = await respuesta.json();
            
            let peliculas = '';
            datos.results.forEach(pelicula => {
                peliculas += `
                    <div class="pelicula">
                        <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                        <h3 class="titulo">${pelicula.title}</h3>
                        <div class="star">
                            <img src="assect/bxs-star.svg" alt="">                            
                            <p class"vote">${pelicula.vote_average}</p>
                        </div>
                    </div>
                `;
            });

            document.getElementById('contenedor').innerHTML = peliculas;

        } 

    } catch(error){
        console.log(error);
    }

}

cargarPeliculas();
