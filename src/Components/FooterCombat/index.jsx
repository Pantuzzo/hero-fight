import React, { useContext, useState } from "react";
import "./index.scss";
import { HeroContext } from "../../HeroContext";
import CombatDialog from "../CombatDialog";

function FooterCombat() {
  const { heros, selectedHeros, removeSelectedHeros, setFilteredHeros } =
    useContext(HeroContext) || {};
  const [isCombatDialogOpen, setCombatDialogOpen] = useState(false);

  if (!selectedHeros || selectedHeros.length === 0) {
    return null;
  }

  const [firstHero, secondHero] = selectedHeros;

  const openCombatDialog = () => {
    setCombatDialogOpen(true);
  };

  const closeCombatDialog = () => {
    setCombatDialogOpen(false);
  };

  const remove = () => {
    if (typeof removeSelectedHeros === "function") {
      removeSelectedHeros();
      setFilteredHeros(heros);
    }
  };

  return (
    <>
      <div className="footer">
        <h1>Combat Heroes</h1>
        <div className="footer__combat">
          <div className="footer__combat__first">
            {firstHero && firstHero.images && firstHero.images.sm ? (
              <img
                src={firstHero.images.sm}
                alt={`Image: ${firstHero.title}`}
              />
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
              <label>{secondHero.name}</label>
            </div>
          )}
        </div>
        <div className="footer__actions">
          {selectedHeros.length === 2 && (
            <button className="fight" onClick={openCombatDialog}>
              Fight
            </button>
          )}
          {selectedHeros && selectedHeros.length > 0 && (
            <button className="removeSelected" onClick={remove}>
              Remove Hero
            </button>
          )}
        </div>
      </div>

      {isCombatDialogOpen && <CombatDialog onClose={closeCombatDialog} />}
    </>
  );
}

export default FooterCombat;
