import React, { useState, useEffect } from 'react';
import './styles.css';
import api from '../../services/api.js';
import PokeList from '../../components/PokeList';
import PageHeader from '../../components/PageHeader';
import RegionSelect from '../../components/RegionSelect';
import lensIcon from '../../assets/icons/wide_lens_gray.png'
import ThemeBtn from '../../components/ThemeBtn';
import PageFooter from '../../components/PageFooter';
import Loading from '../../components/Loading';
import { useCallback } from 'react';

const Pokedex = () => {

  const regionData = () => {
    const data = localStorage.getItem("pokeRegion");
    if (data) {
      return data;
    } else {
      return 1;
    }
  }

  const scrollYPos = () => {
    const scrYPos = sessionStorage.getItem("scrollYPosition");
    if (scrYPos) {
      return scrYPos;
    } else {
      return 0;
    }
  }

  const [pokemons, setPokemons] = useState([]);
  const [regionDex, setRegionDex] = useState(regionData());
  const [search, setSearch] = useState("");
  const [pokeFiltered, setPokeFiltered] = useState([]);
  const [vertScroll, setVertScroll] = useState(scrollYPos());
  const [isLoading, setIsLoading] = useState(true);
  const [hideResults, setHideResults] = useState("visible");

  const api_call = useCallback(async () => {
    setIsLoading(true);
    setHideResults("hidden");

    const pokeRequest = api.get(`pokedex/${regionDex}/`);
    const pokeResponse = await pokeRequest;
    setPokemons(pokeResponse.data.pokemon_entries);

    const timer = setTimeout(() => {
      setIsLoading(false);
      setHideResults("visible");
    }, 2000);
    return () => clearTimeout(timer);
  }, [regionDex])

  useEffect(() => {
    api_call();
    localStorage.setItem("pokeRegion", regionDex);
    setVertScroll(0);
  }, [api_call, regionDex]);

  useEffect(() => {
    window.addEventListener("scroll", function () { setVertScroll(window.pageYOffset); });
  });

  useEffect(() => {
    sessionStorage.setItem("scrollYPosition", vertScroll);
  }, [vertScroll]);

  useEffect(() => {
    setPokeFiltered(pokemons.filter(pokemon => pokemon.pokemon_species.name.toLowerCase().includes(search.toLowerCase())));
  }, [search, pokemons]);

  useEffect(() => {
    setTimeout(function scrollToLastPoint() {
      window.scroll(0, vertScroll);
    }, 1000);
  }, [vertScroll]);

  return (
    <>
      <PageHeader />
      <RegionSelect regionValue={regionDex} regionChange={e => { setRegionDex(e.target.value) }} />
      <ThemeBtn />
      <div className="search-container">
        <div className="search-wrapper">
          <img className="search-icon" src={lensIcon} alt="Search Icon" />
          <input className="search-input" type="text" placeholder="Pokésearch" onChange={e => { setSearch(e.target.value) }} />
        </div>
      </div>
      {isLoading && <Loading />}
      <PokeList pokemons={pokeFiltered} hideResults={hideResults} />
      <PageFooter />
    </>
  );
}

export default Pokedex;