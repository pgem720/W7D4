// import { receiveAllPokemon } from "../actions/pokemon_actions";

export const fetchAllPokemon = () => {
  debugger
  return $.ajax({
    method: 'GET',
    url: 'api/pokemon'
  });
};
