import { connect } from 'react-redux';
import PokemonIndex from './pokemon_index'
import { selectAllPokemon } from '../../reducers/selectors'

const msp = (state) => {
  const { pokemon } = state.entities;
  debugger
  return {
    pokemon: Object.values(pokemon)
  };
};

const mdp = dispatch => {
  debugger
  return {
    selectAllPokemon: (state) => {
      debugger
      return dispatch(selectAllPokemon(state));
    }
  };
};

export default connect(msp, mdp)(PokemonIndex);