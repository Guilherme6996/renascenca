import React, { useEffect, useState } from "react";
import "./App.css";
import CharacterCard from "./CharacterCard";

const imageMap = {
  charles: "/images/charles.png",
  vander: "/images/vander.png",
  ryujin: "/images/ryujin.png",
  alden: "/images/alden.png",
  elaine: "/images/elaine.png",
  hugo: "/images/hugo.png",
  kimika: "/images/kimika.png",
  kiwi: "/images/kiwi.png",
  doc: "/images/doc.png",
  kaizo: "/images/kaizo.png",
  gojo: "/images/gojo.png",
  sigma: "/images/sigma.png",
  reiko: "/images/reiko.png",
  osluer: "/images/osluer.png",
  sayaka: "/images/sayaka.png",
  viktor: "/images/viktor.png",
  elliot: "/images/elliot.png",
};

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("/data/characters.json")
      .then((res) => res.json())
      .then((data) => setCharacters(data.characters))
      .catch((err) => console.error("Erro ao carregar JSON:", err));
  }, []);

  return (
    <div className="app">
      <div className="page-header">
        {/* NOVO CONTAINER PARA TÍTULO E ÍCONE */}
        <div className="title-and-icon-container">
          <h1 className="page-title">Personagens de Renascença</h1>
          <img src="/images/icone.png" alt="Ícone" className="rotating-icon" />
        </div>
        <p className="page-subtitle">
          Finalmente fiz esse site lesgo
        </p>
      </div>

      <div className="card-container">
        {characters.map((char, index) => (
          <CharacterCard
            key={char.id}
            nome={char.nome}
            altura={char.altura}
            organizacao={char.organização}
            descricao={char.descricao}
            imagem={imageMap[char.imagem.toLowerCase()] || "/images/default.png"}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;