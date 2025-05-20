import { useState, useEffect } from 'react'
const usuarios = [

    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }

]

const UserListFetch = () => {
    const [listaUsuarios, setListaUsuarios] = useState([])// almacenar datos
    const [pagina, setPagina] = useState(1);

    const [loading, setLoading] = useState(false);// Booleano para ver si esta cargando 
    const [error,setError]= useState(null)// posibles errores null apagado"string" u "objeto"

    // obtener datos del API
    useEffect(() => {
        console.log("Cargando datos al montar componente... ")
        fetchUsers()

    }, [pagina]);

    const fetchUsers = async () => {
        try {
            // activamos la carga de datos 
            setLoading(true);

            // limpiamos el error previo
            setError(null);

            //tratamos de obtener respouesta 
            const response = await fetch(`https://jsonplaceholder.typicode.com/users?_page=${pagina}&_limit=3`);


            //verificamos si la respuesta es correcta
            if (!response.ok){
                throw new Error(`Error:${response.status} - ${response.statusText}`);
            }

            // convertimos nuetsra respuesta JSON a JS
            const data = await response.json();

            // guardamos los datos en nuestro State
            setListaUsuarios(data);

           

        } catch (error) {
            console.error("tuvimos un error:", error)
            setError(error.message)
        }finally{
            // desactivamos el flag cuando termina ( con exito o con error )
            // ya tengo mis datos asique apago el flag
            setLoading(false);
        }


    }

    const nextPage = ( )=>{
        setPagina(p=>p+1)
    }

    const prevPage = ( )=>{
        // if( p<-1)return
        // quiero el mayor numero entre 1 y " pagina anterior -1"
        setPagina(p=>Math.max(p-1,1));// en que elemeneto me quedo y no se puede volver desde lapag 0,  math max me devuelve el maximo de esos dos 

    }
    return (
        <div>
            <h2> FETCH: Lista de Usuarios </h2>

            {/* Estado de carga */}
            {loading && (
                <div>Cargando usuarios.. </div>
                
            )}
            {/* Mensaje de error  */}
            {
                error && (
                    <div>Error al cargar los datos: {error}</div>
                )
            }
            <ul>
                {
                    listaUsuarios.map(({ id, name, email, website }) => (
                        <li key={id} className="Card">
                            <h3>Nombre: {name}</h3>
                            <p>Email:{email}</p>
                            <p>Sitio Web:{website}</p>

                        </li>
                    ))
                }


            </ul>
                {/* que nos imprima JSON para testear cuanto valen misdatos:
            {JSON.stringify(listaUsuarios,null,2)} null y 2 espacios y tabulacion */}

            {/* {Mensaje si no encontro usuarios } */}
            {!loading && !error && listaUsuarios.length ===0 && 
            (
                <div> No se encontro usuarios...</div>
            )}

            <div className="Controles">
                <button onClick={prevPage} disabled={loading || pagina === 1}>Anterior</button>
                {pagina}
                <button onClick={nextPage} disabled={loading}>Siguiente</button>
            </div>
        </div>
    );
}

export default UserListFetch;



// // Importamos los hooks de React
// import { useState, useEffect } from 'react'

// // Declaramos un array local con usuarios (actualmente no se usa, ya que los datos se obtienen por fetch)
// const usuarios = [ /* ...array de 10 usuarios (omitido aquí por brevedad)... */ ]

// // Componente principal
// const UserListFetch = () => {

//   // Estado para guardar la lista de usuarios que viene del servidor
//   const [listaUsuarios, setListaUsuarios] = useState([])

//   // Estado para saber en qué página estamos (comenzamos en la página 1)
//   const [pagina, setPagina] = useState(1)

//   // Estado para saber si los datos están siendo cargados (true mientras se hace fetch)
//   const [loading, setLoading] = useState(false)

//   // Estado para mostrar errores en caso de fallo
//   const [error, setError] = useState(null)

//   // useEffect se ejecuta cada vez que cambia la página
//   useEffect(() => {
//     console.log("Cargando datos ")
//     fetchUsers() // Llama a la función para obtener los datos desde la API
//   }, [pagina]) // Dependencia: solo se ejecuta cuando cambia la página

//   // Función asincrónica que hace la llamada fetch a la API
//   const fetchUsers = async () => {
//     try {
//       setLoading(true)     // Activamos el indicador de carga
//       setError(null)       // Reiniciamos el error (si había alguno anterior)

//       // Hacemos la petición a la API, con paginación: _page y _limit
//       const response = await fetch(`https://jsonplaceholder.typicode.com/users?_page=${pagina}&_limit=3`);

//       // Si la respuesta no es válida, lanzamos un error manualmente
//       if (!response.ok) {
//         throw new Error(`Error:${response.status} - ${response.statusText}`);
//       }

//       // Transformamos la respuesta JSON en un array de objetos JavaScript
//       const data = await response.json();

//       // Guardamos los datos en el estado
//       setListaUsuarios(data)

//     } catch (error) {
//       // Si ocurre un error, lo mostramos en consola y lo guardamos en el estado
//       console.error("tuvimos un error:", error)
//       setError(error.message)
//     } finally {
//       // Apagamos el estado de carga pase lo que pase
//       setLoading(false)
//     }
//   }

//   // Función que avanza a la siguiente página
//   const nextPage = () => {
//     setPagina(p => p + 1) // Suma 1 a la página actual
//   }

//   // Función que retrocede a la página anterior
//   const prevPage = () => {
//     setPagina(p => Math.max(1, p - 1)) // Restamos 1, pero no bajamos de 1
//   }

//   // Render del componente
//   return (
//     <div>
//       <h2> FETCH: Lista de Usuarios </h2>

//       {/* Mostramos un mensaje si está cargando */}
//       {loading && (
//         <div>Cargando usuarios.. </div>
//       )}

//       {/* Mostramos un mensaje si ocurrió un error */}
//       {error && (
//         <div>Error al cargar los datos: {error}</div>
//       )}

//       {/* Lista de usuarios renderizada dinámicamente */}
//       <ul>
//         {
//           listaUsuarios.map(({ id, name, email, website }) => (
//             <li key={id} className="Card">
//               <h3>Nombre: {name}</h3>
//               <p>Email: {email}</p>
//               <p>Sitio Web: {website}</p>
//             </li>
//           ))
//         }
//       </ul>

//       {/* Si no está cargando, no hay error y no hay usuarios, mostramos mensaje vacío */}
//       {!loading && !error && listaUsuarios.length === 0 && (
//         <div>No se encontró usuarios...</div>
//       )}

//       {/* Controles de paginación */}
//       <div className="Controles">
//         <button onClick={prevPage} disabled={loading || pagina === 1}>
//           Anterior
//         </button>

//         {/* Mostramos número de página actual */}
//         {pagina}

//         <button onClick={nextPage} disabled={loading}>
//           Siguiente
//         </button>
//       </div>
//     </div>
//   )
// }

// // Exportamos el componente
// export default UserListFetch