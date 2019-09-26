import { RECEIVE_ALL_POKEMON } from "../actions/pokemon_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  // debugger
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
        return Object.assign({}, action.pokemon)
    default:
      return state;
  }
}