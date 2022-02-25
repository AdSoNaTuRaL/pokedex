import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Pokedex from './pages/Pokedex';
import Pokemon from './pages/Pokemon';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Pokedex}/>
      <Route path="/pokemon/:pokemonId" exact component={Pokemon}/>
    </BrowserRouter>
  );
}

export default Routes;