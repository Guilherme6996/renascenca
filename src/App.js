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
  yoro: "/images/yoro.png",
  okane: "/images/okane.png",
  fabien: "/images/fabien.png",
  pastor: "/images/pastor.png",
  dante: "/images/dante.png",
  etsu: "/images/etsu.png",
  emilia: "/images/emilia.png",
  beltrumon: "/images/beltrumon.png",
  lorenzo: "/images/lorenzo.png",
  fran: "/images/fran.png",
  adam: "/images/adam.png",
  yokubo: "/images/yokubo.png",
  tsumi: "/images/tsumi.png",
  yuki: "/images/yuki.png",
  delilah: "/images/delilah.png",
  shoko: "/images/shoko.png",
  billy: "/images/billy.png",
  bella: "/images/bella.png",
  fami: "/images/fami.png",
  natasha: "/images/natasha.png",
  flint: "/images/flint.png",
  cecilia: "/images/cecilia.png",
  luka: "/images/luka.png",
  arthur: "/images/arthur.png",
  nathalie: "/images/nathalie.png",
  olga: "/images/olga.png",
  neko: "/images/neko.png",
  myaki: "/images/myaki.png",
  anbiru: "/images/anbiru.png",
  alberma: "/images/alberma.png",
  rebecca: "/images/rebecca.png",
  star: "/images/star.png",
  boris: "/images/boris.png",
  cheng: "/images/cheng.png",
  sapphire: "/images/sapphire.png",
  luna: "/images/luna.png",
  // VICTOR COM SISTEMA HÍBRIDO (GIF + PNG)
  victor: {
    gif: "/images/victor.gif",
    png: "/images/victor.png"
  },
  cordelia: "/images/cordelia.png",
  burnice: "/images/burnice.png",
  pompey: "/images/pompey.png",
  ally: "/images/ally.png",
  lumi: "/images/lumi.png",
  kyssandra: "/images/kyssandra.png",
  itami: "/images/itami.png",
  mila: "/images/mila.png",
  lin: "/images/lin.png",
  takeru: "/images/takeru.png",
  cear: "/images/cear.png",
  goru: "/images/goru.png",
  quanxi: "/images/quanxi.png",
  ayla: "/images/ayla.png",
  livia: "/images/livia.png",
  laura: "/images/laura.png",
  ayumi: "/images/ayumi.png",
  vanessa: "/images/vanessa.png",
  kiki: "/images/kiki.png",
  elleonore: "/images/elleonore.png",
  gio: "/images/gio.png",
  leo: "/images/leo.png",
  matriarca: "/images/matriarca.png",
  tf: "/images/tf.png",
  beatriz: "/images/beatriz.png",
  emi: "/images/emi.png",
  shinju: "/images/shinju.png",
  nomi: "/images/nomi.png",
  tomoya: "/images/tomoya.png",
  frederic: "/images/frederic.png",
  rosaria: "/images/rosaria.png",
  sayori: "/images/sayori.png",
  cicada: "/images/cicada.png",
  willis: "/images/willis.png",
  amadeus: "/images/amadeus.png",
  nokia: "/images/nokia.png",
};

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // Função com sistema híbrido - apenas para o Victor
  const getImagePath = (imageName, preferGif = true) => {
    if (!imageName) return "/images/default.png";
    
    const cleanName = imageName.toLowerCase().trim();
    const mappedPath = imageMap[cleanName];
    
    if (!mappedPath) return "/images/default.png";
    
    // Sistema híbrido apenas para o Victor
    if (cleanName === 'victor' && typeof mappedPath === 'object') {
      return preferGif ? mappedPath.gif : mappedPath.png;
    }
    
    // Para todos os outros personagens, retorna a string normal
    return mappedPath;
  };

  useEffect(() => {
    fetch("/data/characters.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Dados carregados:", data.characters);
        setCharacters(data.characters || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar JSON:", err);
        setLoading(false);
      });
  }, []);

  const filteredCharacters = characters.filter(character => {
    if (!character || !character.nome) return false;
    return character.nome.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="app">
      <div className="page-header">
        <div className="title-and-icon-container">
          <h1 className="page-title">Personagens de Renascença</h1>
          <img 
            src="/images/icone.png" 
            alt="Ícone" 
            className="rotating-icon" 
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
        <p className="page-subtitle">
          Finalmente fiz esse site lesgo
        </p>
        
        <div className="search-bar-simple">
          <input
            type="text"
            placeholder="Pesquisar personagem..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input-simple"
          />
        </div>
      </div>

      {loading && (
        <div className="loading">
          <p>Carregando personagens...</p>
        </div>
      )}

      <div className="card-container">
        {filteredCharacters.map((char, index) => (
          <CharacterCard
            key={char.id || index}
            nome={char.nome}
            altura={char.altura}
            organizacao={char.organização}
            descricao={char.descricao}
            imagem={getImagePath(char.imagem)}
            index={index}
          />
        ))}
      </div>

      {!loading && filteredCharacters.length === 0 && characters.length > 0 && (
        <div className="no-results">
          <p>Nenhum personagem encontrado.</p>
        </div>
      )}

      {!loading && characters.length === 0 && (
        <div className="no-results">
          <p>Nenhum personagem carregado.</p>
        </div>
      )}
    </div>
  );
}

export default App;