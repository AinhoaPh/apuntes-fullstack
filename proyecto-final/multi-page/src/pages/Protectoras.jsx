import { useState, useEffect } from 'react';
import { CardPersonaje } from '../components/CardProtectora';
import { personajesMock } from '../mockdata'; // si quieres usar mock

const Personajes = () => {
    const [loading, setLoading] = useState(false); // estado de carga
    const [error, setError] = useState("");      // estado de error
    const [listaPersonajes, setListaPersonajes] = useState([]); // lista de personajes
    const [pagina, setPagina] = useState(1);
    const [info, setInfo] = useState({
        "count": 0,
        "pages": 1,
        "next": null,
        "prev": null
    }); // datos de paginación
    const [filtro, setFiltro] = useState({
        status: "",
        species: "",
        type: "",
        gender: "",
        name: ""
    });
    // const [estado, setEstado] = useState([])
    // const estados = ["Alive", "Dead", "unknown"];



    useEffect(() => {
        // llamar a la funciom cuando cargo el componenete
        traerPersonajes();
    }, [pagina, filtro]);

    // useEffect(() => {
    //     setEstado(["Alive", "Dead", "unknown"]);
    // }, []);


    // FLTRO

    //     const handleCheckbox =
    // ()
    // Función para traer personajes desde la API
    const traerPersonajes = async () => {
        try {
            setLoading(true);
            setError(null);

            // Variable de URL
            const { status, name, species, type, gender } = filtro;

            let url = `https://rickandmortyapi.com/api/character?page=${pagina}`;
            if (status) url += `&status=${status}`;
            if (name) url += `&name=${name}`;
            if (species) url += `&species=${species}`;
            if (type) url += `&type=${type}`;
            if (gender) url += `&gender=${gender}`;



            //Opcion1 TOmas : entender

            // let url = `https://rickandmortyapi.com/api/character?page=${pagina}&status=${filter.status}&species=${filter.species}&name=${filter.name}&type={filter.type}&gender=${filter.gender}`;

            // const filtroUrl = crearSearchParams(filters);
            // const crearSearchParams = (filters)=>{
            // const listaAtributos = Object.keys(filters) Para obtener solo los indicies 
            //  let string="";
            // listaAtributos.map((key)=>{
            // if(filters[key] !==""){
            //     string+= `&${key}=${filters[key]}`;
            // }
            // })
            //     return string;

            // }

            // Op 2 Tomas: usar 

            // const params = new URLSearchParams();
            // params.append("page", pagina);// agregar un atributo especificio

            // // Añadir solo dos filtros que tengan valor
            // Object.entries(filters).forEach(([key,value])=>{
            //     if(value !== ""){
            //         params.append(key, value);
            //     }
            // })

            // const response = await fetch (`https://rickandmortyapi.com/api/character?${params.toString()}`)




            // Llamada a la API de Rick and Morty
            const response = await fetch(url);

            // Verificamos si la respuesta es correcta
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            // COnvertimos la respuesta JSON
            const data = await response.json();

            // Guardamos personajes e info de paginación
            setListaPersonajes(data.results);
            setInfo(data.info);

        } catch (error) {
            console.error('Tuvimos un error:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    //   const listaPersonajes = personajesMock.results;
    // const info = personajesMock.info;
    // const{results:listaPersonajes, info}= personajesMock;
    const handlePrev = () => {
        if (pagina - 1 < 1) return;
        setPagina(prev => prev - 1)
    }
    const handleNext = () => {
        if (!info.next) return;
        setPagina(prev => prev + 1)
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFiltro((filtro) => ({
            ...filtro,
            [name]: value
        }));
    };
    return (
        <>
            <header><h1>Personajes Rick & Morty</h1></header>


            <main className="main">

                {/* {personajesMock.results[0].name} primer nombre */}
                {loading && <p>Cargando personajes...</p>}
                {error && <p style={{ color: 'red' }}>Error: {error}</p>}

                {/* Filtro */}

                <section>
                    <p>Filtro:</p>
                    {/* 
                    {["Alive","Dead","Unknown"].map((estado) => (

                        <label key={estado}>
                            <input
                                type="checkbox"
                                value={estado}
                            // checked={}
                            // onChange={handleCheckbox}
                            />
                            {estado}
                        </label>
                    ))} */}

                    {/* Filtro Status */}
                    <button style={{ color: "green" }} onClick={() => setFiltro({ ...filtro, status: "Alive" })}>Vivos</button>
                    <button style={{ color: "red" }} onClick={() => setFiltro({ ...filtro, status: "Dead" })}>Muertos</button>
                    <button onClick={() => setFiltro({ ...filtro, status: "Unknown" })}>Unknown</button>
                    <button onClick={() => setFiltro({ ...filtro, status: "" })}>Status</button>


                    {/* Filtro Gender */}
                    <button onClick={() => setFiltro({ ...filtro, gender: "Female" })}><i className="fas fa-venus" style={{ color: "fuchsia" }}></i></button>
                    <button onClick={() => setFiltro({ ...filtro, gender: "Male" })}><i className="fas fa-mars" style={{ color: "blue" }}></i></button>
                    <button onClick={() => setFiltro({ ...filtro, gender: "Unknown" })}><i className="fas fa-genderless" style={{ color: "gray" }}></i></button>
                    <button onClick={() => setFiltro({ ...filtro, gender: "" })}>Gender</button>

                    {/* Filtro Name */}
                    <input
                        type="text"
                        name="name"
                        placeholder='Buscar por Nombre...'
                        value={filtro.name}
                        onChange={handleChange} />

                    {/* Filtro Species */}
                    <input
                        type="text"
                        name="species"
                        placeholder='Buscar por Especie...'
                        value={filtro.species}
                        onChange={handleChange} />


                    <button onClick={() => setFiltro({ ...filtro, species: "Human" })}><i className="fa-solid fa-person" style={{ color: "#D2B48C" }}></i></button>
                    <button onClick={() => setFiltro({ ...filtro, species: "Alien" })}><i className="fa-brands fa-reddit-alien" style={{ color: "#39FF14" }}></i></button>


                    {/* <button onClick={() => setFiltro({ ...filtro, species: "" })}>Species</button> */}


                    {/* Filtro Type */}
                    <input
                        type="text"
                        name="type"
                        placeholder='Buscar por Tipo...'
                        value={filtro.type}
                        onChange={handleChange} />



                </section>
                {/* Card */}
                <div className="container">
                    {listaPersonajes.map((p) => (
                        <CardPersonaje key={p.id} {...p} />
                    ))}
                </div>

                <p>Total de personajes: {info.count}</p>


                <button onClick={handlePrev}>Anterior</button>

                <button onClick={handleNext}>Siguiente</button>

                <p>Total de páginas: {pagina}/{info.pages}</p>
            </main>
        </>
    );
};

export default Personajes;