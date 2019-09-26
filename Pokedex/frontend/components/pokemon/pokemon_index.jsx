import React from 'react';

export default class PokemonIndex extends React.Component {
  componentDidMount() {
    const { requestAllPokemon } = this.props;
    requestAllPokemon();
  }
  
  render() {
    const { pokemon } = this.props;
    const poke = pokemon.map(poke => <li key={poke.id}>{poke.name} <img src={`${poke.image_url}`} alt=""/> </li>);
    // debugger
    return (
    <>
      <ul>
        {poke}
      </ul>
    </>
    );
  }
}
