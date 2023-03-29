let pagina = 1;
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");
const btnBusqueda = document.querySelector("#btnBusqueda");
const buscador = document.querySelector(".input-search");
const cardContainer = document.getElementById("contenedor");

btnSiguiente.addEventListener("click", () => {
    if (pagina < 1000) {
        pagina += 1;
        cargarPeliculas();
    }
});

btnAnterior.addEventListener("click", () => {
    if (pagina > 1) {
        pagina -= 1;
        cargarPeliculas();
    }
});

// Dando forma a las cards
const cargarPeliculas = async () => {
    try {
        // Obtener los datos de la API y renderizar las cards
        const respuesta = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${pagina}`
        );

        // Si la respuesta es correcta
        if (respuesta.status === 200) {
            const datos = await respuesta.json();

            let peliculas = "";
            datos.results.forEach((pelicula) => {
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

            document.getElementById("contenedor").innerHTML = peliculas;

            // Agregar un evento de escucha al elemento input
            buscador.addEventListener("keyup", (e) => {
                const term = e.target.value.toLowerCase();
                const cards = document.querySelectorAll(".pelicula");

                // Filtrar las cards que coincidan con el término de búsqueda
                cards.forEach((card) => {
                    const title = card
                        .querySelector(".titulo")
                        .textContent.toLowerCase();

                    if (title.includes(term)) {
                        card.style.display = "block";
                    } else {
                        card.style.display = "none";
                    }
                });
            });

        } else {
            Toastify({
                text: "Error",
                duration: 900,
                destination: "https://github.com/apvarun/toastify-js",
                close: true,
                gravity: "top",
                position: "right",
                stopOnFocus: true,
                style: {
                    background: "linear-gradient(to right, #1bc5b1, #03949d)",
                },
                onClick: function () {},
            }).showToast();
        }

    } catch (error) {
        console.log(error);
        Toastify({
            text: "Error",
            duration: 900,
            destination: "https://github.com/apvarun/toastify-js",
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #1bc5b1, #03949d)",
            },
            onClick: function () {},
        }).showToast();
    }
};

cargarPeliculas();

// Cambio de titulo
let webTitle = document.title;

window.addEventListener("blur", () => {
    webTitle = document.title;
    document.title = "¡Regresa! ¡No te vayas! 😱";
});
window.addEventListener("focus", () => {
    document.title = webTitle;
});