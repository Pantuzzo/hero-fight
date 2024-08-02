import React, { useContext, useRef } from "react";
import "./index.scss";
import { HeroContext } from "../../HeroContext";

function Header() {
  const { heros, setFilteredHeros } = useContext(HeroContext);
  const searchInputRef = useRef();

  const cleanFild = () => {
    setFilteredHeros(heros);
    searchInputRef.current.value = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      <div className="main-header_logo" onClick={cleanFild}>
        <div>
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" />
        </div>
        <div className="actions">
          <input
            type="text"
            placeholder="Pesquisar"
            onChange={search}
            ref={searchInputRef}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
