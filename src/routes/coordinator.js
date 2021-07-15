export const goToHomePage = (history) => {
    history.push("/");
  };
  
  export const goToPokedex = (history) => {
    history.push("/pokedex");
  };

  export const goToPokemonDetailPage = (history, pokemonName) => {
    history.push(`/pokemon-detalhes/${pokemonName}`);
  };
