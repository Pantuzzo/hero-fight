import React from "react";
import "./index.scss";

function CombatDialog({ isOpen, onClose, title, description }) {
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className="container-Dialog">
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}

export default CombatDialog;
