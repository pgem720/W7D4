

export const selectAllPokemon = (state) => {
  debugger
  return (Object.values(state.entities.pokemon));
};


// export const selectAllPokemon = ({pokemon}) => (
//   Object.values({pokemon})
// );