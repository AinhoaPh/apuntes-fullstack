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