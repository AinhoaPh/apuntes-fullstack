

// const  MovieSection = ({imagenes}) => {
//     return (
//       <div>
//         {imagenes.map((imagen, id) => (
//           <img
//             key={id}
//             src={imagen.src}
//             alt={imagen.alt}
//           />
//         ))}
//       </div>
//     );
//   };

// export default  MovieSection;

import MovieCard from "./MovieCard";
const MovieSection = ({movies}) => {

    return (
        <section className="movie__section">
    
        <div className="movie__grid">
            {movies.map((movie, idx)=>(
                <MovieCard key={idx} {...movie} />

            ))}</div> 
        
        </section>
      );
}
 
export default MovieSection;