import React, { useState } from "react";
import "./CharacterCard.css";

function CharacterCard({ nome, altura, organizacao, descricao, imagem, index }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Função para tratar erro de imagem
  const handleImageError = () => {
    setImageError(true);
  };

  // Obter a imagem correta (com fallback)
  const getCorrectImage = () => {
    if (imageError || !imagem) {
      return "/images/default.png";
    }
    return imagem;
  };

  // Função corrigida para limpar a organização (remover pontos e espaços extras)
  const getOrgClass = (org) => {
    if (!org) return "";
    
    // Remove pontos, espaços extras e normaliza
    const cleanOrg = org.toLowerCase()
      .replace(/\./g, '') // Remove pontos
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-");
    
    return cleanOrg;
  };

  const orgClass = getOrgClass(organizacao);
  const isMainCharacter = index < 5 && !organizacao;
  
  const cardClass = isMainCharacter ? `card main-character` : `card ${orgClass}`;
  const modalClass = isMainCharacter ? `modal-content modal-main-character` : `modal-content ${orgClass}`;

  return (
    <>
      {/* Card do Personagem */}
      <div className={cardClass} onClick={openModal}>
        <img
          src={getCorrectImage()}
          alt={nome}
          className="card-image"
          onError={handleImageError}
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
            src={getCorrectImage()}
            alt={nome}
            className="modal-image"
            onError={handleImageError}
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