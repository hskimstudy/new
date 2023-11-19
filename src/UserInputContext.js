import React, { createContext } from "react";

export const UserInputContext = ({ children }) => {
  const [selectedAge, setSelectedAge] = createContext(0);
  const [selectedGender, setSelectedGender] = createContext("");
  const [selectedGenres, setSelectedGenres] = createContext({});
  const [selectedJob, setSelectedJob] = createContext(0);

  return (
    <UserInputContext.Provider
      value={{
        selectedAge,
        selectedGender,
        selectedGenres,
        selectedJob,
      }}
    >
      {children}
    </UserInputContext.Provider>
  );
};
