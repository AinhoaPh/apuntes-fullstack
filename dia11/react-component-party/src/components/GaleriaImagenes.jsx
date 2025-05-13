

const GaleriaImagenes = ({imagenes}) => {
    return (
      <div>
        {imagenes.map((imagen, id) => (
          <img
            key={id}
            className="galeria__img"
            src={imagen.src}
            alt={imagen.alt}
          />
        ))}
      </div>
    );
  };

export default GaleriaImagenes;