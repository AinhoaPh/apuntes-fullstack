import Tarea from './Tarea'

const ListaTareas = ({ tareas }) => {
  return (
    <ul>
      {tareas.map(({id, nombre, completada}) => (
        <Tarea
          key={id}
          nombre={nombre}
          completada={completada}
        />
      ))}
    </ul>
  );
};

export default ListaTareas;