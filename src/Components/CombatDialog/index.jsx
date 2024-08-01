import React, { useContext } from "react";
import "./index.scss";
import { HeroContext } from "../../HeroContext";

function CombatDialog({ onClose }) {
  const { selectedHeros } = useContext(HeroContext) || {};
  const [firstHero, secondHero] = selectedHeros;

  const comparePowerstats = (firstHero, secondHero) => {
    if (!firstHero || !secondHero) {
      return {};
    }

    // Atualizado para remover "durability"
    const powerstats = ["intelligence", "strength", "speed", "power", "combat"];
    let comparisonResults = {};
    let firstHeroWins = 0;
    let secondHeroWins = 0;

    powerstats.forEach((stat) => {
      const firstHeroStat = parseInt(firstHero.powerstats[stat], 10) || 0;
      const secondHeroStat = parseInt(secondHero.powerstats[stat], 10) || 0;

      if (firstHeroStat > secondHeroStat) {
        comparisonResults[stat] = "firstHero";
        firstHeroWins++;
      } else if (firstHeroStat < secondHeroStat) {
        comparisonResults[stat] = "secondHero";
        secondHeroWins++;
      } else {
        comparisonResults[stat] = "tie";
      }
    });

    return { comparisonResults, firstHeroWins, secondHeroWins };
  };

  const { comparisonResults, firstHeroWins, secondHeroWins } =
    comparePowerstats(firstHero, secondHero);

  const renderPowerStat = (hero, stat, comparisonResult) => {
    const isFirstHero = hero === firstHero;
    let arrow;
    if (comparisonResult === "tie") {
      arrow = null;
    } else if (comparisonResult === "firstHero") {
      arrow = isFirstHero ? "arrow_drop_up" : "arrow_drop_down";
    } else {
      arrow = isFirstHero ? "arrow_drop_down" : "arrow_drop_up";
    }
    return (
      <div className="containerStats" key={stat}>
        <label>{stat.charAt(0).toUpperCase() + stat.slice(1)}:</label>
        <label>{hero.powerstats[stat]}</label>
        {arrow && (
          <span
            className="material-symbols-outlined"
            style={{ color: arrow === "arrow_drop_up" ? "green" : "red" }}
          >
            {arrow}
          </span>
        )}
      </div>
    );
  };

  const winner =
    firstHeroWins > secondHeroWins
      ? firstHero.name
      : secondHeroWins > firstHeroWins
      ? secondHero.name
      : "Draw";
  const firstHeroClass =
    firstHeroWins > secondHeroWins
      ? "border-winner"
      : secondHeroWins > firstHeroWins
      ? "border-loser"
      : "";
  const secondHeroClass =
    secondHeroWins > firstHeroWins
      ? "border-winner"
      : firstHeroWins > secondHeroWins
      ? "border-loser"
      : "";

  return (
    <div className="combat-dialog">
      <div className="combat-dialog__content">
        <div className="combat-dialog__content__header">
          <button className="close-button" onClick={onClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className={`combat-dialog__content__first ${firstHeroClass}`}>
          <img src={firstHero.images.sm} alt={firstHero.slug} />
          <div className="powerstats">
            <h1 className="name">{firstHero.name}</h1>
            {Object.keys(firstHero.powerstats)
              .filter((stat) => stat !== "durability") // Remover "durability" aqui
              .map((stat) =>
                renderPowerStat(firstHero, stat, comparisonResults[stat])
              )}
          </div>
        </div>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/vs.png`}
            alt="VS"
            className="vs-image"
          />
          <div className="combat-dialog__winner">
            <h1 className="winner">Winner: {winner}</h1>
          </div>
        </div>
        <div className={`combat-dialog__content__second ${secondHeroClass}`}>
          <img src={secondHero.images.sm} alt={secondHero.slug} />
          <div className="powerstats">
            <h1 className="name">{secondHero.name}</h1>
            {Object.keys(secondHero.powerstats)
              .filter((stat) => stat !== "durability")
              .map((stat) =>
                renderPowerStat(secondHero, stat, comparisonResults[stat])
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CombatDialog;
