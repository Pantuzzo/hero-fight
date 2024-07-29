import React, { useContext } from "react";
import "./index.scss";
import { HeroContext } from "../../HeroContext";

function CombatDialog({ onClose }) {
  const { selectedHeros } = useContext(HeroContext) || {};
  const [firstHero, secondHero] = selectedHeros;

  return (
    <div className="combat-dialog">
      <div className="combat-dialog__content">
        <div className="combat-dialog__content__header">
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="combat-dialog__content__first">
          <img src={firstHero.images.sm} alt={firstHero.slug} />
          <div className="powerstats">
            <h1 className="name">{firstHero.name}</h1>
            <div>
              <label>Intelligence:</label>
              <label>{firstHero.powerstats.intelligence}</label>
            </div>
            <div>
              <label>Strength:</label>
              <label> {firstHero.powerstats.strength}</label>
            </div>
            <div>
              <label>Speed:</label>
              <label> {firstHero.powerstats.speed}</label>
            </div>
            <div>
              <label>Durability:</label>
              <label> {firstHero.powerstats.durability}</label>
            </div>
            <div>
              <label>Power:</label>
              <label> {firstHero.powerstats.power}</label>
            </div>
            <div>
              <label>Combat:</label>
              <label>{firstHero.powerstats.combat}</label>
            </div>
          </div>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/vs.png`}
          alt="VS"
          className="vs-image"
        />
        <div className="combat-dialog__content__second">
          <img src={secondHero.images.sm} alt={secondHero.slug} />
          <div className="powerstats">
            <h1 className="name">{secondHero.name}</h1>
            <div>
              <label>Intelligence:</label>
              <label>{secondHero.powerstats.intelligence}</label>
            </div>
            <div>
              <label>Strength:</label>
              <label> {secondHero.powerstats.strength}</label>
            </div>
            <div>
              <label>Speed:</label>
              <label> {secondHero.powerstats.speed}</label>
            </div>
            <div>
              <label>Durability:</label>
              <label> {secondHero.powerstats.durability}</label>
            </div>
            <div>
              <label>Power:</label>
              <label> {secondHero.powerstats.power}</label>
            </div>
            <div>
              <label>Combat:</label>
              <label>{secondHero.powerstats.combat}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CombatDialog;
