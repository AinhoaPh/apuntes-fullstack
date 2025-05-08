import MovieCard from "../../../../../../dia6/pixar/src/components/movies-main/MovieCard";

const MovieSection = () => {
    const movies = [
        {tittle:"Dream Productions", image:"./imgs/movie_dreamproductions.png", bg:"./imgs/bg_pink.jpg", text:"Now Streaming"},
    ]
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