const data = [
    {
        title: "Creed III",
        poster: "https://image.tmdb.org/t/p/w500//fcFMd3HdyX7r5gtFwVnn2qr5Yhq.jpg",
        category: "acción",
        link: "...",
    },
    {
        title: "Pantera Negra: Wakanda por siempre",
        poster: "https://image.tmdb.org/t/p/w500///mYpT2R7639KvKZ668uoQGS2QNFp.jpg",
        category: "acción",
        link: "...",
    },
    {
        title: "Un Vecino Gruñón",
        poster: "https://image.tmdb.org/t/p/w500//8bNLrZt9lrmnt6LsaGG8GfDfgYR.jpg",
        category: "otro",
        link: "...",
    },
    {
        title: "John wick",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgGMIK1BXBIuG05JlTZoyvS1IRjQ5sRHfCVwmQl7Y8BTPsfu2YYWIS13GfTH2IByGemM4&usqp=CAU",
        category: "accion",
        link: "...",
    },
    {
        title: "Llaman a la puerta",
        poster: "https://image.tmdb.org/t/p/w500//4Zna9CvyzaAgejsErmyXmHC64Dd.jpg",
        category: "miedo",
        link: "...",
    },
    {
        title: "Gato con Botas: El último deseo",
        poster: "https://image.tmdb.org/t/p/w500//lyP4WNmUiiOgl4g2z7ywE0z6SGF.jpg",
        category: "otro",
        link: "...",
    },
    {
        title: "Alerta Extrema",
        poster: "https://image.tmdb.org/t/p/w500//juoinefK6tMbjwJhRpRvbAAmrTB.jpg",
        category: "accion",
        link: "...",
    },
    {
        title: "Avatar: El camino del agua",
        poster: "https://image.tmdb.org/t/p/w500//kUAG4ZQcsNbRyiPyAr3hLdsVgAq.jpg",
        category: "ficcion",
        link: "...",
    },
    {
        title: "Megan",
        poster: "https://image.tmdb.org/t/p/w500//ogSpQMynabVu91Bi7AuUA8tshfb.jpg",
        category: "miedo",
        link: "...",
    },
    {
        title: "Little Dixie",
        poster: "https://image.tmdb.org/t/p/w500//cmWTZj9zzT9KFt3XyL0gssL7Ig8.jpg",
        category: "accion",
        link: "...",
    },
    {
        title: "Huesera",
        poster: "https://image.tmdb.org/t/p/w500/aVw74MES2R0kdSN8JhbJC8Xpne9.jpg",
        category: "miedo",
        link: "...",
    },
    {
        title: "Duro de entrenar",
        poster: "https://image.tmdb.org/t/p/w500//lXkS6kSA0W3c0zVr3QrCBseaNgc.jpg",
        category: "otro",
        link: "...",
    },
];

let pagina = 1;
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");
const btnBusqueda = document.querySelector("#btnBusqueda");
const buscador = document.querySelector(".input-search");
const cardContainer = document.getElementById("contenedor");

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
data.map((pelicula) => {
    cardContainer.innerHTML += `
    <!-- ---- Card ----  -->
    <div class="pelicula">
        <img class="poster" src="${pelicula.poster}">
        <h3 class="titulo">${pelicula.title}</h3>
        <a
        href="${pelicula.link}"
        target="_blank"
        ><img src="assect/bx-link.svg" alt="" />
        </a>
        </div> `;
});

// Pronto
// COMPARA VALOR
// FILTAR
// btnSiguiente.addEventListener('click', () => {
//     if(pagina < 8){
//         pagina += 1;
//         cargarPeliculas();
//     }
// });

// btnAnterior.addEventListener('click', () => {
//     if(pagina > 1){
//         pagina -= 1;
//         cargarPeliculas();
//     }
// });

// function cargarPeliculas(){

// }
