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
  return <MovieContext.Provider>{children}</MovieContext.Provider>;
}; //Provides state to any of the components that are wrapped inside of it
