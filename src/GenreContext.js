import React, { createContext, useContext, useState, useCallback } from "react";

const GenreContext = createContext("");

export const useGenre = () => {
  return useContext(GenreContext);
};

export const GenreProvider = ({ children }) => {
  const [selectedGenres, setSelectedGenres] = useState({});

  const toggleGenre = useCallback((genre) => {
    setSelectedGenres((prevGenres) => ({
      ...prevGenres,
      [genre]: prevGenres[genre] ? 0 : 1,
    }));
  }, []);

  return (
    <GenreContext.Provider value={{ selectedGenres, toggleGenre }}>
      {children}
    </GenreContext.Provider>
  );
};
