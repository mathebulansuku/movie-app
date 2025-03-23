function MovieCard({ movieObject }) {
  function onFavoriteClick() {
    alert("Favorite Clicked");
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movieObject.url} alt={movieObject.title} />
      </div>
      <div className="movie-overlay">
        <button className="favorite-btn" onClick={onFavoriteClick}>
          {" "}
          **
        </button>
        <p>{movieObject.description}</p>
      </div>
      <div className="movie-info">
        <h3>{movieObject.title}</h3>
        <p>{movieObject.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
