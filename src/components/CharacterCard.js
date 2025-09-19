import React from "react";
import "./CharacterCard.css";

function CharacterCard({ nome, altura, organizacao, descricao, imagem }) {
  return (
    <div className="card">
      <img src={imagem || "/images/default.png"} alt={nome} />
      <h2>{nome}</h2>
      <p><strong>Altura:</strong> {altura}m</p>
      <p><strong>Organização:</strong> {organizacao}</p>
      <p><strong>Descrição:</strong> {descricao}</p>
      <button>Ver mais</button>
    </div>
  );
}

export default CharacterCard;
