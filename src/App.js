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
  theseus: "/images/theseus.png",
  naya: "/images/naya.png",
  emma: "/images/emma.png",
  phantom: "/images/phantom.png",
  boom: "/images/boom.png",
  gabriel: "/images/gabriel.png",
  angelica: "/images/angelica.png",
  sagittarius:"/images/sagittarius.png",
  sua:"/images/sua.png",
  qiqi:"/images/qiqi.png",
  ysobel:"/images/ysobel.png",
  melman:"/images/melman.png",
  glaz:"/images/glaz.png",
  mao:"/images/mao.png",
  mckenzie:"/images/mckenzie.png",
  takara:"/images/takara.png",
  trinity:"images/trinity.png",
  kim:"/images/kim.png",
  daisy:"/images/daisy.png",
  kaitlyin:"/images/kaitlyin.png",
  nobunaga:"/images/nobunaga.png",
  makima:"/images/makima.png",
  testa:"/images/testa.png",
  lilith:"/images/lilith.png",
  somnus:"/images/somnus.png",
  silver:"/images/silver.png",
  blitz:"/images/blitz.png",
  rick:"/images/rick.png",
  tooru:"/images/tooru.png",
  finn:"/images/finn.png",
  ying:"/images/ying.png",
  fang:"/images/fang.png",
  fujimaru:"/images/fujimaru.png",
  retro:"/images/retro.png",
  paragon:"/images/paragon.png",
  kage:"/images/kage.png",
  spencer:"/images/spencer.png",
  daph:"/images/daph.png",
  shy:"/images/shy.png",
  veldora:"/images/veldora.png",
  anby:"/images/anby.png",
  nicole:"/images/nicole.png",
  spike:"/images/spike.png",
  brigitta:"/images/brigitta.png",
  betty:"/images/betty.png",
  julia:"/images/julia.png",
  pulchra:"/images/pulchra.png",
  grace:"images/grace.png",
  alfred:"images/alfred.png",
  tubarao:"images/tubarao.png",
  ziggy:"images/ziggy.png",
  susu:"images/susu.png",
  zhu:"images/zhu.png",
  rata:"images/rata.png",
  dallas:"images/dallas.png",
  nyx:"images/nyx.png",
  caronte:"images/caronte.png",
  astra:"images/astra.png",
  athena:"images/athena.png",
  famine:"images/famine.png",
  alexandra:"images/alexandra.png",
  oksanna:"images/oksanna.png",
  kyssandrinhas:"images/kyssandrinhas.png",
  peter:"images/peter.png",
  juri:"images/juri.png",
  satsuki:"images/satsuki.png",
  florian:"images/florian.png",
  hazel:"/images/hazel.png",
  atomic:"/images/atomic.png",
  nitrogen:"/images/nitrogen.png",
  tombstone:"/images/tombstone.png",
  carmen:"/images/carmen.png",
  rednav:"/images/rednav.png",
  veronica:"/images/veronica.png",
  titi:"/images/titi.png",
  nox:"/images/nox.png",
  briar:"/images/briar.png",
  azrael:"/images/azrael.png",
  nova:"/images/nova.png",
  oberon:"/images/oberon.png",
  luuk:"/images/luuk.png",
  solomon:"/images/solomon.png",
  raymond:"/images/raymond.png",
  sarah:"/images/sarah.png",
  melvin:"/images/melvin.png",
  pierre:"/images/pierre.png",
  x:"/images/x.png",
  uriel:"/images/uriel.png",
  ladraozinho:"/images/ladraozinho.png",
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

const factionOrder = {
  "Congresso": 1,
  "GIWYBXE NI TAS": 2,
  "Noroi": 3,
  "Arasaka": 4,
  "Tribunal Tácito": 5,
  "Livraria": 6,
  "Deadsec":7,
  "Gangues":8,
  "Cidadão":9,
  "Misteriosos":10,
  "Sem Categoria": 11
};

const filteredCharacters = characters
  .filter((character) => {
    if (!character?.nome) return false;

    return character.nome
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  })
  .sort((a, b) => {
    const orgA = a.organização || "Nenhum";
    const orgB = b.organização || "Nenhum";

    const factionA = factionOrder[orgA] || 999;
    const factionB = factionOrder[orgB] || 999;

    if (factionA !== factionB) {
      return factionA - factionB;
    }

    return a.nome.localeCompare(b.nome, "pt-BR");
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