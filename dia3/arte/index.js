const ArtGallery = [
    { id: 1, artist: "Monet", title: "Water Lilies", year: 1916, isExhibited: true },
    { id: 2, artist: "Van Gogh", title: "Starry Night", year: 1889, isExhibited: true },
    { id: 3, artist: "Da Vinci", title: "Mona Lisa", year: 1503, isExhibited: false },
    { id: 4, artist: "Picasso", title: "Guernica", year: 1937, isExhibited: true },
    { id: 5, artist: "Rembrandt", title: "The Night Watch", year: 1642, isExhibited: false },
    { id: 6, artist: "Dali", title: "The Persistence of Memory", year: 1931, isExhibited: true },
    { id: 7, artist: "Munch", title: "The Scream", year: 1893, isExhibited: false },
    { id: 8, artist: "Klimt", title: "The Kiss", year: 1907, isExhibited: true },
    { id: 9, artist: "Hopper", title: "Nighthawks", year: 1942, isExhibited: false },
    { id: 10, artist: "Vermeer", title: "Girl with a Pearl Earring", year: 1665, isExhibited: true }
];



//Ejercicio 1
// Filtrar las obras exhibidas
console.log("Ejercicio 1");
ArtGallery.forEach(obra => {


    // Deconstruccion de objetos { id: 10, artist: "Vermeer", title: "Girl with a Pearl Earring", year: 1665, isExhibited: true }
    const { id, artist, title, year, isExhibited } = obra;

    const isExhibida = (isExhibited) ? "si" : "no";
    console.log(`La obra ${title} de ${artist} fue pintada en ${year} ${isExhibida}encuentra exhibida`);


})


//Ejercicio 2
//map para imprimir las obras exhibidas
const listaTitulos = ArtGallery.map(obra => obra.title);
console.log("listaTitulos");
listaTitulos.forEach(titulo => {
    console.log(titulo);
}
)


//Ejercicio 8
//crear una funcion
function CrearObra(){


    CrearObra({ artist: "Vermeer", title: "Girl with a Pearl Earring", year: 1665, isExhibited: true });

    CrearObra({ artist: "Vermeer", title: "Girl with a Pearl Earring", year: 1665, isExhibited: true });

    console.log(ArtGallery);


    //ejercicio 4
    function buscarObraPorTitulo(titulo) {
        return ArtGallery.find(obra => obra.title.toLowerCase() === titulo.toLowerCase());
    }
}
//Ejeercicio Tomas

/** */


/**
* Comentarios de funcion JSDocs
* 
* Busca una obra de arte a partir de su titulo
* @param {string}title - el titulo de la obra 
* @paran {string}artista - el artista de la obra
* @returns {object | {error:404, msg:string}} - la obra de arte encontrada o un objeto de error
 */
const findArt = (title, artista) => {
    title = title.toLowerCase().trim();//minusculas  y sin espacios
    const obra = ArtGallery.find(art => art.title.toLowerCase() == title)
    if (!obra) {
        return { msg: "Obra no encontrada", error: 404 }
    }
    return obra;
}

//Ejercicio 5
// si son de un año especifico

const hayObrasDe1503 = ArtGallery.some(obra => obra.year === 1503);

// ejerciciio tomas
1503 == "1503"

const listObras = ArtGallery.some(obra => obra.year === 1503);


// ejercicio 6    
// si hay obras exhibidas
yearOfBirth = 1980;
const hayObrasExhibidas = ArtGallery.every(obra => obra.year < yearOfBirth);
if (hayObrasExhibidas) {
    console.log("Todas las obras son anteriores a 1980");
}
else {
    console.log("Hay obras posteriores a 1980");
}
// ejercicio 7
// encontrar el indice de una obra por su titulo


function encontrarIndicePorTitulo(titulo) {
    return ArtGallery.findIndex(obra => obra.title.toLowerCase() === titulo.toLowerCase());
}

//    Ejercicio 8 
// Crear una nueva obra
function CrearObra(obra) {
    ArtGallery.push(obra);
}
// Crear una nueva obra
CrearObra({ id: 11, artist: "Kandinsky", title: "Composition VIII", year: 1923, isExhibited: true });
console.log(ArtGallery);
