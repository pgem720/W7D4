import React from 'react';
import ReactDOM from 'react-dom';
import {receiveAllPokemon, requestAllPokemon} from '../frontend/actions/pokemon_actions';
import {fetchAllPokemon} from '../frontend/util/api_util';
import {selectAllPokemon} from '../frontend/reducers/selectors';
import Root from '../frontend/components/root';
import configureStore from '../frontend/store/store';


document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  
  window.receiveAllPokemon = receiveAllPokemon
  window.fetchAllPokemon = fetchAllPokemon
  window.getState = store.getState
  window.dispatch = store.dispatch
  window.requestAllPokemon = requestAllPokemon
  window.selectAllPokemon = selectAllPokemon

  const root = document.getElementById("root");
  // ReactDOM.render(<h1>Pokedex</h1>, root);
  ReactDOM.render(<Root store={store}/>, root);
});