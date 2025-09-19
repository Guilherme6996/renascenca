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
};

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("/data/characters.json")
      .then(res => res.json())
      .then(data => setCharacters(data.characters))
      .catch(err => console.error("Erro ao carregar JSON:", err));
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>Personagens de Renascença</h1>
          <img src="/images/icone.png" alt="Ícone" className="rotating-icon" />
        </div>
        <p>Finalmente fiz esse site do les go.</p>
      </header>

      <div className="card-container">
        {characters.map((char, index) => (
          <CharacterCard
            key={char.id}
            index={index}
            nome={char.nome}
            altura={char.altura}
            organizacao={char.organização}
            descricao={char.descricao}
            imagem={imageMap[char.imagem.toLowerCase()] || "/images/default.png"}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
