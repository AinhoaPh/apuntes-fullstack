const MovieSection = () => {
    const movies = [
        {tittle:"Dream Productions", image:"./imgs/movie_dreamproductions.png", bg:"./imgs/bg_pink.jpg", text:"Now Streaming"},
    ]
    return (
        <section className="movie__section">
        <h3>Movie Section</h3>

        <h4>Win or Loose</h4>
        <h4>Careers</h4>
        <h4>Win or Loose</h4>

        <h4>Movie Gallery</h4>
        <div className="movie__grid">
            {movies.map((movie, idx)=>(
                <MovieCard key={idx} {...movie} />

            ))}</div> 
        
        </section>
      );
}
 
export default MovieSection;