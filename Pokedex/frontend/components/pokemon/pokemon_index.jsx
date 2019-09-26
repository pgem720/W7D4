import React from 'react';

export default class PokemonIndex extends React.Component {
  componentDidMount() {
    const { selectAllPokemon } = this.props;
    selectAllPokemon();
    // const { requestAllPokemon } = this.props;
    // requestAllPokemon();
  }
  
  render() {
    const { pokemon } = this.props;
    const poke = pokemon.map(poke => <Poke key={poke.id} poke={poke.name} image={poke.image_url} />);
    // debugger
    return (
    <>
      <ul>
        <li>{poke}</li>
      </ul>
    </>
    );
  }
}
