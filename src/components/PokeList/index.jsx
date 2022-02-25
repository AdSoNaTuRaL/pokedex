import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import capitalize from "../../functions/capitalize";
import { useTheme } from "../../contexts/Theme";

const PokeList = ({ pokemons, hideResults }) => {
  const { theme } = useTheme();

  const getPokeId = (url) => {
    let pokeId = url.replace(
      /https:\/\/pokeapi.co\/api\/v2\/pokemon-species\/|\//g,
      ""
    );
    return pokeId;
  };

  return (
    <div className={`poke-list ${hideResults} ${theme}`}>
      {pokemons.map((poke) => {
        return (
          <Link
            className={`poke-name ${theme}`}
            to={`/pokemon/${getPokeId(poke.pokemon_species.url)}`}
            key={poke.entry_number}
          >
            <div className="poke-sprite-container">
              <img
                className="poke-sprite"
                src={`https://www.serebii.net/pokedex-swsh/icon/${(
                  "000" + getPokeId(poke.pokemon_species.url)
                ).slice(-3)}.png`}
                alt={`${capitalize(poke.pokemon_species.name)} sprite`}
              />
            </div>

            <span className="poke-name-text">
              #{("000" + poke.entry_number).slice(-3)}{" "}
              {capitalize(poke.pokemon_species.name)}
            </span>

            <span className="poke-name-text"> Teste</span>
          </Link>
        );
      })}
    </div>
  );
};

export default PokeList;
