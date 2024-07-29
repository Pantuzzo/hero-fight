import React, { createContext, useState, useEffect } from "react";
import fetchHerosAPI from "./services/heroService";

export const HeroContext = createContext();

export const HeroProvider = ({ children }) => {
  const [heros, setHeros] = useState([]);
  const [filteredHeros, setFilteredHeros] = useState([]);
  const [selectedHeros, setSelectedHeros] = useState([]);

  const removeSelectedHeros = () => {
    setSelectedHeros([]);
  };

  useEffect(() => {
    const fetchHeros = async () => {
      try {
        const data = await fetchHerosAPI();
        setHeros(data);
        setFilteredHeros(data);
        localStorage.setItem("heros", JSON.stringify(data));
      } catch (error) {
        console.error(error);
      }
    };

    fetchHeros();

    const loadFromLocalStorage = () => {
      const data = localStorage.getItem("heros");
      if (data) {
        const parsedData = JSON.parse(data);
        setHeros(parsedData);
        setFilteredHeros(parsedData);
      }
    };

    loadFromLocalStorage();

    window.addEventListener("storage", loadFromLocalStorage);

    return () => window.removeEventListener("storage", loadFromLocalStorage);
  }, []);

  return (
    <HeroContext.Provider
      value={{
        heros,
        filteredHeros,
        setFilteredHeros,
        selectedHeros,
        setSelectedHeros,
        removeSelectedHeros,
      }}
    >
      {children}
    </HeroContext.Provider>
  );
};
