import { createContext, useEffect, useContext, useEffect, use } from "react";
import { useState } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
  });

  return <MovieContext.Provider>{children}</MovieContext.Provider>;
}; //Provides state to any of the components that are wrapped inside of it
