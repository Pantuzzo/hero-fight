import React, { useContext } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { HeroContext } from "../../HeroContext";

function Header() {
  const navigate = useNavigate();
  const { heros, setFilteredHeros } = useContext(HeroContext);
  const { selectedHeros, removeSelectedHeros } = useContext(HeroContext) || {};

  const goToStart = () => {
    navigate("/");
  };

  const search = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const newFilteredHeros = heros.filter((hero) =>
      hero.slug.includes(searchTerm)
    );
    setFilteredHeros(newFilteredHeros);
  };

  return (
    <div className="main-header">
      <div className="main-header_logo" onClick={goToStart}>
        <div>
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" />
        </div>
        <div className="actions">
          <input type="text" placeholder="Pesquisar" onChange={search} />
          {selectedHeros && selectedHeros.length > 0 && (
            <button className="removeSelected" onClick={removeSelectedHeros}>
              Remove Hero
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
