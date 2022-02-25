import React from 'react';
import capitalize from '../../functions/capitalize';
import './styles.css';

const PokeType = ({
  types
}) => {

  return (
    <div className="types-container">
      {types && types.map((pokeType) => {
        return (<p className={`poke-type ${pokeType.type.name}-type`}
          key={pokeType.type.name}>{capitalize(pokeType.type.name)}
        </p>);
      })}
    </div>
  );
}

export default PokeType;