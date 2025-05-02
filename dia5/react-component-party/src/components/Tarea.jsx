

const Tarea = ({ nombre, completada }) => {
    return (
        
      <li style={{ textDecoration: completada ? 'line-through' : 'none' }}>
        {nombre}
      </li>
    );
  };
  
  export default Tarea;