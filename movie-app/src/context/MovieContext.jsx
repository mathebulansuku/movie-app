import { createContext, useEffect, useContext, useState } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");

    if (storedFavs) {
      setFavorites(JSON.parse(storedFavs)); //If favorite movies are stored, setFavorite as a JSON array.
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]); // Anytime favorite state changes, update local Storage

  const addToFavorite = (movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
  };

  const removeFromFavorite = (movieId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((movie) => movie.id !== movieId)
    ); //generates a new array of movies that are not equal to id
  };

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const value = { favorites, addToFavorite, removeFromFavorite, isFavorite }; //add values or functions that you want to be accessible on children.
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
}; //Provides state to any of the components that are wrapped inside of it
