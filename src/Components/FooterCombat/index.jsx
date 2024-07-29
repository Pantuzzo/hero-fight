import React, { useContext } from "react";
import "./index.scss";
import { HeroContext } from "../../HeroContext";

function FooterCombat() {
  const { selectedHeros, removeSelectedHeros } = useContext(HeroContext) || {};

  if (!selectedHeros || selectedHeros.length === 0) {
    return null;
  }

  const [firstHero, secondHero] = selectedHeros;

  return (
    <div className="footer">
      <h1>Combat Heroes</h1>
      <div className="footer__combat">
        <div className="footer__combat__first">
          {firstHero.images && firstHero.images.sm ? (
            <img src={firstHero.images.sm} alt={`Image: ${firstHero.title}`} />
          ) : (
            <p>Image not available</p>
          )}
          <label>{firstHero.name}</label>
        </div>
        {selectedHeros.length === 2 && <h1>VS</h1>}
        {selectedHeros.length === 2 && (
          <div className="footer__combat__second">
            {secondHero && secondHero.images && secondHero.images.sm ? (
              <img
                src={secondHero.images.sm}
                alt={`Image: ${secondHero.title}`}
              />
            ) : (
              <p>Image not available</p>
            )}
            <label>{secondHero ? secondHero.name : "N/A"}</label>
          </div>
        )}
      </div>
      <div className="footer__actions">
        {selectedHeros.length === 2 && <button className="fight">Fight</button>}
        <button className="removeSelected" onClick={removeSelectedHeros}>
          Remove Selected Heros
        </button>
      </div>
    </div>
  );
}

export default FooterCombat;
