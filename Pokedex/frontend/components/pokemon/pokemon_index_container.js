import { connect } from 'react-redux';
import PokemonIndex from './pokemon_index';
import { selectAllPokemon } from '../../reducers/selectors';
import { requestAllPokemon } from '../../actions/pokemon_actions';

const msp = (state) => {
  const { pokemon } = state.entities;
  debugger
  return {
    pokemon: selectAllPokemon(state)
    // pokemon: Object.values(pokemon)
  };
};

const mdp = dispatch => {
  debugger
  return {
    requestAllPokemon: () => {
      debugger
      return dispatch(requestAllPokemon());
    }
  };
};

export default connect(msp, mdp)(PokemonIndex);