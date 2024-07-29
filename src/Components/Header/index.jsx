import React, { useContext } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { HeroContext } from "../../HeroContext";

function Header() {
  const navigate = useNavigate();
  const { heros, setFilteredHeros } = useContext(HeroContext);

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
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" />
        <input type="text" placeholder="Pesquisar" onChange={search} />
      </div>
    </div>
  );
}

export default Header;
