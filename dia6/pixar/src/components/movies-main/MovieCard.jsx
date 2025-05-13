
const MovieCard = ({title, image, bg, text}) => {
    const movieCardStyle = bg?{    
        backgroundImage: `url(${bg})`,

    }:{
        backgroundColor: "black"
    }
    return ( 
        <div className="galeria" style={movieCardStyle}>
            <img src={image} alt={title} className="galeria__img" />
            <p className="galeria__text">{text}</p>

        </div> 
     );
}
 
export default MovieCard;