import React, { useState, useEffect } from 'react';
import './styles.css';
import api from '../../services/api.js';
import PokeStats from '../../components/PokeStats';
import PageHeader from '../../components/PageHeader';
import capitalize from '../../functions/capitalize';
import PokeType from '../../components/PokeType';
import ThemeBtn from '../../components/ThemeBtn';
import PageFooter from '../../components/PageFooter';
import { useTheme } from '../../contexts/Theme';

const Pokemon = ({ match }) => {

  const { theme } = useTheme();
  const { params: { pokemonId }, } = match;
  const [pokeData, setPokeData] = useState([]);

  const api_call = async () => {

    const pokeRequest = api.get(`pokemon/${pokemonId}`);
    const pokeResponse = await pokeRequest;
    setPokeData(pokeResponse.data);
  }

  useEffect(() => {
    api_call();
  });

  return (
    <>
      <PageHeader />
      <div className={`poke-description ${theme}`}>
        <h1 className={`poke-number-name ${theme}`}>#{('000' + (pokemonId)).slice(-3)} {pokeData.name && capitalize(pokeData.name)}</h1>
        <div className="poke-pic-container">
          <img className="poke-pic" src={`https://www.serebii.net/pokemon/art/${('000' + (pokemonId)).slice(-3)}.png`} alt="Sprite" />
        </div>
        <PokeType types={pokeData.types} />
        <table className="stats-list">
          <PokeStats info={pokeData} stats={pokeData.stats} />
        </table>
        <ThemeBtn />
        <PageFooter />
      </div>
    </>
  );
}

export default Pokemon;