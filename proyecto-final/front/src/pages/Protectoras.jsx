import { useState, useEffect } from 'react';
import { CardProtectora } from '../components/CardProtectora';


const Protectoras = () => {
    const [loading, setLoading] = useState(false); // estado de carga
    const [error, setError] = useState("");      // estado de error
    const [listaProtectoras, setListaProtectoras] = useState([]); // lista de Protectoras
    const [pagina, setPagina] = useState(1);
    const [info, setInfo] = useState({
        "count": 0,
        "pages": 1,
        "next": null,
        "prev": null
    }); // datos de paginación
    const [filtro, setFiltro] = useState({
        comunidad: "",
        categoria: "",
        nombre: ""
    });
    // const [estado, setEstado] = useState([])
    // const estados = ["Alive", "Dead", "unknown"];

    const API = import.meta.env.VITE_BACKEND_API;

    useEffect(() => {
        // llamar a la funciom cuando cargo el componenete
        traerProtectoras();
    }, [pagina, filtro]);

    // Función para traer Protectoras desde la API
    const traerProtectoras = async () => {
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

            const response = await fetch(`${API}/protectoras?${params.toString()}`);
            // const response = await fetch(url);

            // Verificamos si la respuesta es correcta
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            // COnvertimos la respuesta JSON
            const data = await response.json();

            // Guardamos Protectoras e info de paginación
            setListaProtectoras(data.data);
            //setInfo(data.info);

        } catch (error) {
            console.error('Tuvimos un error:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    //   const listaProtectoras = ProtectorasMock.results;
    // const info = ProtectorasMock.info;
    // const{results:listaProtectoras, info}= ProtectorasMock;
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
            <header><h1>Protectoras</h1></header>


            <main className="main">

                {/* {ProtectorasMock.results[0].name} primer nombre */}
                {loading && <p>Cargando Protectoras...</p>}
                {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {/* Filtros */}
      <section className="filtros">
          <input
            type="text"
            name="nombre"
            placeholder="Buscar por nombre..."
            value={filtro.nombre}
            onChange={handleChange}
          />

          <select name="comunidad" value={filtro.comunidad} onChange={handleChange}>
            <option value="">Todas las comunidades</option>
            <option value="Madrid">Madrid</option>
            <option value="Valencia">Valencia</option>
            <option value="Andalucía">Andalucía</option>
            {/* Añade más si lo necesitas */}
          </select>

          <select name="categoria" value={filtro.categoria} onChange={handleChange}>
            <option value="">Todas las categorías</option>
            <option value="Perros">Perros</option>
            <option value="Gatos">Gatos</option>
            <option value="Aves">Aves</option>
            {/* Añade más si lo necesitas */}
          </select>
        </section>
                {/* Card */}
                <div className="container">
                    {listaProtectoras.map((p) => (
                        <CardProtectora key={p._id} {...p} />
                    ))}
                </div>

                {/* <p>Total de Protectoras: {info.count}</p> */}


                <button onClick={handlePrev}>Anterior</button>

                <button onClick={handleNext}>Siguiente</button>

                {/* <p>Total de páginas: {pagina}/{info.pages}</p> */}
            </main>
        </>
    );
};

export default Protectoras;