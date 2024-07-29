import React from 'react';
import Modal from 'react-modal';

const HeroModal = ({ isOpen, onRequestClose, heroes }) => {
  const [hero1, hero2] = heroes;

 
  const comparePowers = () => {
    if (!hero1 || !hero2) return '';
    var hero1power = hero1.powerstats.power + hero1.powerstats.intelligence + hero1.powerstats.strength + hero1.powerstats.speed + hero1.powerstats.durability + hero1.powerstats.combat
    var hero2power = hero2.powerstats.power + hero2.powerstats.intelligence + hero2.powerstats.strength + hero2.powerstats.speed + hero2.powerstats.durability + hero2.powerstats.combat
    if (hero1power  > hero2power) {
      return `${hero1.name} Venceu a batalha!`;
    } else if (hero1power < hero2power) {
      return `${hero2.name} Venceu a batalha!`;
    } else {
      return 'A Batalha empatou!';
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Comparação de Heróis</h2>
      {hero1 && (
        <div>
          <h3>{hero1.name}</h3>
          <p>Poder: {hero1.powerstats.power}</p>
          <p>Inteligencia: {hero1.powerstats.intelligence}</p>
          <p>Força: {hero1.powerstats.strength}</p>
          <p>Velocidade: {hero1.powerstats.speed}</p>
          <p>Durabilidade: {hero1.powerstats.durability}</p>
          <p>Combate: {hero1.powerstats.combat}</p>

          <img src={hero1.images.md} alt={hero1.name} style={{ width: '50px', marginRight: '10px' }} />
                  </div>
      )}
      {hero2 && (
        <div>
          <h3>{hero2.name}</h3>
          <p>Poder: {hero2.powerstats.power}</p>
          <p>Inteligencia: {hero2.powerstats.intelligence}</p>
          <p>Força: {hero2.powerstats.strength}</p>
          <p>Velocidade: {hero2.powerstats.speed}</p>
          <p>Durabilidade: {hero2.powerstats.durability}</p>
          <p>Combate: {hero2.powerstats.combat}</p>
          <img src={hero2.images.md} alt={hero2.name} style={{ width: '50px', marginRight: '10px'}} />
        </div>
      )}
      <h4>{comparePowers()}</h4>
      <button onClick={onRequestClose}>Fechar</button>
    </Modal>
  );
};

export default HeroModal;
