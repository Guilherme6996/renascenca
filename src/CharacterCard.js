// CharacterCard.js
import React, { useState } from "react";
import "./CharacterCard.css";

function CharacterCard({ nome, altura, organizacao, descricao, imagem, index }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Normaliza o nome da organização (sem acento, minúsculo)
  const orgClass = organizacao
    ? organizacao.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")
    : "";

  // Classes dinâmicas
  const cardClass =
    index < 5
      ? `card main-character`
      : `card ${orgClass}`;
  const modalClass =
    index < 5
      ? `modal-content modal-main-character`
      : `modal-content ${orgClass}`;

  return (
    <>
      {/* Card principal */}
      <div className={cardClass}>
        <img
          src={imagem || "/images/default.png"}
          alt={nome}
          className="card-image"
        />
        <h2>{nome}</h2>
        <button onClick={openModal}>Ver mais</button>
      </div>

      {/* Modal */}
      <div className={`modal-overlay ${isModalOpen ? "open" : ""}`}>
        <div className={modalClass}>
          <img
            src={imagem || "/images/default.png"}
            alt={nome}
            className="modal-image"
          />
          <div className="modal-info main-text">
            <h2>{nome}</h2>
            <p>
              <strong>Altura:</strong> {altura}
            </p>
            <p>
              <strong>Organização:</strong> {organizacao}
            </p>
            <p className="subtitle">
              <strong>Descrição:</strong> {descricao}
            </p>
            <button className="close-btn" onClick={closeModal}>
              Fechar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CharacterCard;
