
const MovieCard = ({title, image, bg, text}) => {
    const movieCardStyle = bg?{    
        backgroundImage: `url(${bg})`,

    }:{
        backgroundColor: "black"
    }
    return ( 
        <div className="movie-card" style={movieCardStyle}>
            <img src={image} alt={title} className="movie__img" />
            <p>{text}</p>

        </div> 
     );
}
 
export default MovieCard;