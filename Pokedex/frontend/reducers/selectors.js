

export const selectAllPokemon = (state) => (
  Object.values(state.entities.pokemon)
);


// export const selectAllPokemon = ({pokemon}) => (
//   Object.values({pokemon})
// );