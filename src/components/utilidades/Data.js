const productos=
[
    {
        id:"re001",
        nombre:"Reto Creativo",
        descripción:"Juego de palabras donde los jugadores dicen palabras que empiezan con la última letra de la palabra anterior.",
        imagen: "../public/img/retoCreativo.png",
        stock:5,
        precio:10000,
        categoria:"partygame"

    },
    {
        id:"re002",
        nombre:"Exploradores del Espacio",
        descripción:"Carrera espacial donde los jugadores lideran expediciones para colonizar un nuevo planeta, enfrentándose a eventos y encuentros alienígenas.",
        imagen: "../public/img/exploradoresDelEspacio.png",
        stock:10,
        precio:20000,
        categoria:"partygame"

    },
    {
        id:"re003",
        nombre:"Laberinto de Espejos",
        descripción:"Estrategia en un laberinto mágico donde los jugadores buscan el camino correcto a través de espejos que cambian de posición.",
        imagen: "../public/img/laberintoDeEspejos.png",
        stock:20,
        precio:40000,
        categoria:"partygame"

    },
    {
        id:"re004",
        nombre:"Viaje en el Tiempo",
        descripción:"Los jugadores resuelven acertijos para evitar alteraciones en la línea temporal mientras viajan a través del tiempo.",
        imagen: "../public/img/viajeEnElTiempo.png",
        stock:10,
        precio:25000,
        categoria:"hasta12"

    },
    {
        id:"re005",
        nombre:"Granja Fantástica",
        descripción: "Juego de gestión donde los jugadores cultivan plantas y criaturas para crear pociones mágicas y obtener puntos.",
        imagen: "../public/img/granjaFantastica.png",
        stock:5,
        precio:30000,
        categoria:"hasta12"

    },
    {
        id:"re006",
        nombre:"Tesoros Submarinos",
        descripción: "Buceadores buscan tesoros en el fondo del océano, evitando criaturas y recolectando puntos con cartas de elementos encontrados",
        imagen: "../public/img/elTesoroSubmarino.png",
        stock:15,
        precio:40000,
        categoria:"hasta12"

    },
]

const obtenerProductos= new Promise((resolve, reject) => {
    setTimeout(()=>{resolve(productos);},2000);
});


export default obtenerProductos
