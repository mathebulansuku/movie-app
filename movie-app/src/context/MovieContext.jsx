import { createContext, useEffect, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  return <MovieContext.Provider>{children}</MovieContext.Provider>;
}; //Provides state to any of the components that are wrapped inside of it
