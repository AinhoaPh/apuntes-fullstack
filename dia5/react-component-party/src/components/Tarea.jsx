

const Tarea = ({ nombre, completada }) => {
    return (
        
      <li style={{listStyle:"upper-roman", textDecoration: completada ? 'line-through' : 'none' }}>
        {nombre}
      </li>
    );
  };
  
  export default Tarea;