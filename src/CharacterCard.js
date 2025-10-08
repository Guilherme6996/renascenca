import React, { useState } from "react";
import "./CharacterCard.css";

function CharacterCard({ nome, altura, organizacao, descricao, imagem, index }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const getCorrectImage = () => {
    if (imageError || !imagem) {
      return "/images/default.png";
    }
    return imagem;
  };

  // Verifica se a imagem é um GIF
  const isGif = imagem && imagem.toLowerCase().endsWith('.gif');

  // Defina quais são os 5 protagonistas por nome
  const isMainCharacter = () => {
    const mainCharacters = ['charles', 'vander', 'ryujin', 'alden', 'elaine'];
    return mainCharacters.includes(nome.toLowerCase());
  };

  const getOrgClass = (org) => {
    if (!org || org.trim() === '') return "no-org";
    
    const cleanOrg = org.toLowerCase()
      .replace(/\./g, '')
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-");
    
    return cleanOrg;
  };

  const mainChar = isMainCharacter();
  const orgClass = getOrgClass(organizacao);
  
  const cardClass = mainChar ? `card main-character ${orgClass}` : `card ${orgClass}`;
  const modalClass = mainChar ? `modal-content modal-main-character ${orgClass}` : `modal-content ${orgClass}`;

  return (
    <>
      {/* Card do Personagem */}
      <div className={cardClass} onClick={openModal}>
        <div className="image-container">
          {imageLoading && (
            <div className="image-loading">Carregando...</div>
          )}
          <img
            src={getCorrectImage()}
            alt={nome}
            className={`card-image ${isGif ? 'gif-image' : ''}`}
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
          {isGif && <div className="gif-badge">GIF</div>}
        </div>
        <h2>{nome}</h2>
        <button onClick={openModal}>Ver mais</button>
      </div>

      {/* Modal */}
      <div
        className={`modal-overlay ${isModalOpen ? "open" : ""}`}
        onClick={handleOverlayClick}
      >
        <div className={modalClass}>
          <div className="modal-image-container">
            {imageLoading && (
              <div className="image-loading">Carregando...</div>
            )}
            <img
              src={getCorrectImage()}
              alt={nome}
              className={`modal-image ${isGif ? 'gif-image' : ''}`}
              onError={handleImageError}
              onLoad={handleImageLoad}
            />
            {isGif && <div className="gif-badge">GIF</div>}
          </div>
          <div className="modal-info">
            <h2>{nome}</h2>
            <p>
              <strong>Altura:</strong> {altura}
            </p>
            <p>
              <strong>Organização:</strong> {organizacao || "Nenhuma"}
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