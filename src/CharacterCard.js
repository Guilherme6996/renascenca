import React, { useState } from "react";
import "./CharacterCard.css";

function CharacterCard({ nome, altura, organizacao, descricao, imagem, index }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Função para fechar o modal ao clicar no fundo escuro (overlay)
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const orgClass = organizacao
    ? organizacao.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")
    : "";

  const cardClass = index < 5 ? `card main-character` : `card ${orgClass}`;
  const modalClass = index < 5 ? `modal-content modal-main-character` : `modal-content ${orgClass}`;

  return (
    <>
      {/* Card do Personagem */}
      <div className={cardClass} onClick={openModal}>
        <img
          src={imagem || "/images/default.png"}
          alt={nome}
          className="card-image"
        />
        <h2>{nome}</h2>
        <button onClick={openModal}>Ver mais</button>
      </div>

      {/* Modal */}
      <div
        className={`modal-overlay ${isModalOpen ? "open" : ""}`}
        onClick={handleOverlayClick}
      >
        <div className={modalClass}>
          <img
            src={imagem || "/images/default.png"}
            alt={nome}
            className="modal-image"
          />
          <div className="modal-info">
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
            <button onClick={closeModal}>
              Fechar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CharacterCard;