import React, { useEffect, useState } from 'react';
import HeroModal from './HeroModal';

const HeroList = () => {
  const [heroes, setHeroes] = useState([]);
  const [filteredHeroes, setFilteredHeroes] = useState([]);
  const [selectedHeroes, setSelectedHeroes] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchHeroes = async () => {
      const response = await fetch('https://homologacao3.azapfy.com.br/api/ps/metahumans');
      const data = await response.json();
      setHeroes(data);
      setFilteredHeroes(data);
    };

    fetchHeroes();
  }, []);

  
  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilter(value);

    const filtered = heroes.filter((hero) =>
      hero.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredHeroes(filtered);
  };

  const handleSelectHero = (hero) => {
    if (selectedHeroes.length < 2) {
      setSelectedHeroes((prev) => [...prev, hero]);
    }

    if (selectedHeroes.length === 1) {
      setModalIsOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setSelectedHeroes([]);
  };

  return (
    <div>
      <h1>Lista de Heróis</h1>
      <input
        type="text"
        placeholder="Filtrar por nome"
        value={filter}
        onChange={handleFilterChange}
      />

      <ul>
        {filteredHeroes.map((hero) => (
          <li key={hero.id} onClick={() => handleSelectHero(hero)}>
            {hero.name}
            <br/>
            <div><img src={hero.images.md} alt={hero.name} style={{ width: '50px', marginRight: '10px' }} /></div>
          </li>
        ))}
      </ul>

      {modalIsOpen && (
        <HeroModal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          heroes={selectedHeroes}
        />
      )}
    </div>
  );
};

export default HeroList;
