import { useState, useEffect } from 'react';
import { CardReceta } from '../components/CardReceta';


const Recetas = () => {
    const [loading, setLoading] = useState(false); // estado de carga
    const [error, setError] = useState("");      // estado de error
    const [listaRecetas, setlistaRecetas] = useState([]); // lista de Protectoras
    const [pagina, setPagina] = useState(1);
    const [info, setInfo] = useState({
        "count": 0,
        "pages": 1,
        "next": null,
        "prev": null
    }); // datos de paginación
    const [filtro, setFiltro] = useState({
        titulo: "",
        animal: ""
    });

    const API = import.meta.env.VITE_BACKEND_API;

    useEffect(() => {
        // llamar a la funciom cuando cargo el componenete
        traerRecetas();
    }, [pagina, filtro]);

    // Función para traer Protectoras desde la API
    const traerRecetas = async () => {
        try {
            setLoading(true);
            setError(null);


            // codigo reutilizado dia 16 (multi-page)
            const params = new URLSearchParams();
            params.append("page", pagina);// agregar un atributo especificio

            // // Añadir solo dos filtros que tengan valor
            Object.entries(filtro).forEach(([key,value])=>{
                if(value.trim()){
                    params.append(key, value);
                }
            })

            const response = await fetch(`${API}/recetas?${params.toString()}`);
            // const response = await fetch(url);

            // Verificamos si la respuesta es correcta
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            // COnvertimos la respuesta JSON
            const data = await response.json();
console.log("Respuesta recibida:", data);
            // Guardamos Protectoras e info de paginación
            setlistaRecetas(data.data);
            //setInfo(data.info);

        } catch (error) {
            console.error('Tuvimos un error:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };


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
            <header><h1>Recetas</h1></header>


            <main className="main">

                {/* {ProtectorasMock.results[0].name} primer nombre */}
                {loading && <p>Cargando Recetas...</p>}
                {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {/* Filtros */}
      <section className="filtros">
          <input
            type="text"
            name="titulo"
            placeholder="Buscar por titulo..."
            value={filtro.titulo}
            onChange={handleChange}
          />

          <select name="animal" value={filtro.animal} onChange={handleChange}>
            <option value="">Todos los animales</option>
            <option value="Perro">Perro</option>
            <option value="Roedor">Roedor</option>
            <option value="Gato">Gato</option>
        
          </select>


        </section>
                {/* Card */}
                <div className="container">
                    {listaRecetas.map((p) => (
                        <CardReceta key={p._id} {...p} />
                    ))}
                </div>

                {/* <p>Total de Recetas: {info.count}</p> */}


                <button onClick={handlePrev}>Anterior</button>

                <button onClick={handleNext}>Siguiente</button>

                {/* <p>Total de páginas: {pagina}/{info.pages}</p> */}
            </main>
        </>
    );
}
 
export default Recetas;