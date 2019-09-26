import * as APIUtil from '../util/api_util'

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const requestAllPokemon = () => {
  debugger
   return dispatch => {
    debugger
     return APIUtil.fetchAllPokemon().then(pokemon => {
      debugger
      return dispatch(receiveAllPokemon(pokemon));
    })
  }
};