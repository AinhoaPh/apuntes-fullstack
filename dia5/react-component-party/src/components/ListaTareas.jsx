import Tarea from './Tarea'

const ListaTareas = ({ tareas }) => {
  return (
    <ul>
      {tareas.map(({ id, nombre, completada }) => (
        //   { id: 1, nombre: 'Estudiar React', completada: true }
        <Tarea
          key={id}
          nombre={nombre}
          completada={completada}
          // {
          //  completada ? <button>Eliminar</button> : <button>Completada</button>
          // }
        />
      ))}
    </ul>
  );

  /** 
   * ---------------------------------------
   *  ---  Otra forma de escribir el map version amplia ---
   * ---------------------------------------
   * tareas.map((tarea, idx) => {
   * const { id, nombre, completada } = tarea;
   * return (
   * <Tarea
   * key={idx}
   * nombre={nombre}
   * isCompletada={completada}
   * id={id}
   * />
   * );
   * }
   * )
   * 
   * ----------------------------
   * --- Version simplificada ---
   * ----------------------------
   * tareas.map(({ id, nombre, completada }) => (
   * <Tarea
   * key={id}
   * tarea={nombre}
   * isCompletada={completada}
   * id={id}    
   * />
   * ))
   * 
   * * 
   *   ----------------------------
   *   ---   Spread operator    --- "{...objeto}" genera una copia del objeto leido
   *    ----------------------------
   * tareas.map (tarea => ( <Tarea key={tarea.id} {...tarea} /> ))
   * )
   * 
   */



};

export default ListaTareas;