import React, { useContext } from "react";
import "./index.scss";
import { HeroContext } from "../../HeroContext";

function Cards() {
  const { filteredHeros, selectedHeros, setSelectedHeros } =
    useContext(HeroContext);

  const handleCardClick = (hero) => {
    setSelectedHeros((prevSelectedHeros) => {
      if (
        prevSelectedHeros.some((selectedHero) => selectedHero.id === hero.id)
      ) {
        return prevSelectedHeros.filter(
          (selectedHero) => selectedHero.id !== hero.id
        );
      } else {
        if (prevSelectedHeros.length < 2) {
          return [...prevSelectedHeros, hero];
        } else {
          return prevSelectedHeros;
        }
      }
    });
  };

  return (
    <div className="container-Card">
      {filteredHeros.length > 0 ? (
        filteredHeros.map((hero) => (
          <div
            className={`containerCard ${
              selectedHeros.some((selectedHero) => selectedHero.id === hero.id)
                ? "selected"
                : ""
            }`}
            key={hero.id}
            onClick={() => handleCardClick(hero)}
          >
            <img src={hero.images.sm} alt={`Image: ${hero.title}`} />
            <label>{hero.name}</label>
          </div>
        ))
      ) : (
        <p>Nenhum herói encontrado.</p>
      )}
    </div>
  );
}

export default Cards;
