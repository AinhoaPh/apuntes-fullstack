
const  MovieSection = ({imagenes}) => {
    return (
      <div>
        {imagenes.map((imagen, id) => (
          <img
            key={id}
            src={imagen.src}
            alt={imagen.alt}
          />
        ))}
      </div>
    );
  };

export default  MovieSection;